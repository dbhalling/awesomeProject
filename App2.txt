import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation';

export default class App extends React.Component {
  getUserLocationHandler = () => {
    console.log('Pressed the button');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>It Works</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});