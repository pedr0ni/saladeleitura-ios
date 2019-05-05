import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 500);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.splashContainer}>
          <Image style={styles.splashImage} source={require('./assets/images/icon.png')} />
          <Text style={styles.splashText}>Sala de Leitura</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashText: {
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
  splashImage: {
    width: 128,
    height: 128,
  }
});
