import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Card, CardItem, Form, Item, Input, Button, List, ListItem, Left, Thumbnail, } from 'native-base';
import Title from '../components/Title';

export default class LivrosScreen extends React.Component {

  static navigationOptions = {
    header: null
}

  render() {
    return (
      <View style={styles.container}>
			  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Title>Livros</Title>
          <Form>
            <Item style={styles.input}>
              <Input placeholder="Buscar livro..."/>
            </Item>
            <Button style={styles.button} primary>
              <Text style={{
                color: 'white',
                width: '100%',
                textAlign: 'center',
                fontSize: 16
              }}>Buscar</Text>
            </Button>
          </Form>
          <List button={true}>
            <ListItem thumbnail>
              <Left>
                <Thumbnail circular  />
              </Left>
            </ListItem>
            <ListItem button={true}>
              <Text>Livro Teste</Text>
            </ListItem>
          </List>
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
