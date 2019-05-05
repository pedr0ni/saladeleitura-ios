import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import { Card, CardItem, Body } from 'native-base';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super(props);
    this.state = { isLoading: true };
    this.info = {};
  }

  async componentDidMount() {
    try {
      let response = await fetch(
        'https://saladeleitura.com.br/app/api.php?action=loadInfo&cart=1234',
      );
      let responseJson = await response.json();
      this.info = responseJson;
      this.setState({
        isLoading: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator size="large" style={{marginTop: '50%'}} />
        </View>
      );
    }
    let Pendente;
    if (this.info.aviso) {
      Pendente = <Text style={styles.cardBody}>{this.info.al_entrega}</Text>
    } else {
      Pendente = <Text style={styles.cardBody}>Nenhum</Text>
    }
    return (
		<View style={styles.container}>
			<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
				<Text style={styles.title}>Meu Perfil</Text>
                <Card>
                    <CardItem style={styles.cardHeader} header>
                        <Text style={styles.cardText}>Livros</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardBody}>{this.info.livros}</Text>
                        </Body>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem style={styles.cardHeader} header>
                        <Text style={styles.cardText}>Alugados</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardBody}>{this.info.alugados}</Text>
                        </Body>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem style={styles.cardHeader} header>
                        <Text style={styles.cardText}>Pendente</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardBody}>{Pendente}</Text>
                        </Body>
                    </CardItem>
                </Card>
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
  cardHeader: {
      backgroundColor: '#6c5ce7'
  },
  cardText: {
		color: 'white',
		fontSize: 16
  },
  cardBody: {
      width: '100%',
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold'
  },
  title: {
	  fontWeight: 'bold',
	  fontSize: 34
  }
});
