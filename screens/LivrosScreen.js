import React from 'react';
import { ScrollView, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Card, CardItem, Form, Item, Input, Button, List, ListItem, Left, Thumbnail, } from 'native-base';
import Title from '../components/Title';

export default class LivrosScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      buscaText: '',
      isLoading: true
    };
  }
 
  buscarClick() {
    this.setState({buscaText: this.state.buscaText, isLoading: true});
  }

  loadLivros(query) {
    try {
      fetch(
        'https://saladeleitura.com.br/app/api.php?action=searchLivro&titulo='+query,
      ).then(response => response.json())
      .then(responseJson => {
        this.livrosArray = responseJson.livros;
        this.setState({
          isLoading: false
        });
      });
      
    } catch (error) {
      console.error(error);
    }
  }

  render() {

    let Lista;

    if (this.state.buscaText != '') {

      this.loadLivros(this.state.buscaText);

      if (this.state.isLoading) {
        Lista = (
          <ActivityIndicator size="large" style={{marginTop: '50%'}} />
        );
      } else {
        Lista = (
          <List button={true}>
            {this.livrosArray.map((entry) => {
              return (
                <ListItem>
                  <Text>{entry}</Text>
                </ListItem>
              );
            })}  
          </List>
        );
      }
      
    }

    return (
      <View style={styles.container}>
			  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Title>Livros</Title>
          <Form>
            <Item style={styles.input}>
              <Input onChangeText={(text) => {this.state.buscaText = text}} ref="busca" placeholder="Buscar livro..."/>
            </Item>
            <Button onPress={this.buscarClick.bind(this)} style={styles.button} primary>
              <Text style={{
                color: 'white',
                width: '100%',
                textAlign: 'center',
                fontSize: 16
              }}>Buscar</Text>
            </Button>
          </Form>
          {Lista}
			  </ScrollView>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5
  },
  contentContainer: {
    paddingTop: 30,
  },
  input: {
    width: '100%',
    marginLeft: -5 // Compensa a margem do container
  },
  button: {
    marginTop: 8,
    width: '100%'
  }
});
