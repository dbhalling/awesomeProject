import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PermissionsAndroid } from 'react-native';

import FetchLocation from './components/FetchLocation';

export default class App extends React.Component {

async requestLocationPermission(){
  const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
        alert("You've access for the location");
    } else {
      console.log(chckLocationPermission);
      try {
        console.log('testing');
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                  'title': 'Cool Location App required Location permission',
                  'message': 'We required Location permission in order to get device location ' +
                      'Please grant us.'
              }
          );
          console.log(granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              alert("You've access for the location");
          } else {
              alert("You don't have access for the location");
          }
      } catch (err) {
          alert(err);
      }
    }
}
    
  getUserLocationHandler = () => {
    
    console.log('awaitBefore');
    this.requestLocationPermission();
    console.log('awaitAfter');
    
    console.log("Pressed");
    if(navigator.geolocation) {
      console.log("navigator.geolocation is available");
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("current position acquired: ", position);
      });  
    }
     navigator.geolocation.getCurrentPosition(position => {
       console.log(position);
     }, err => console.log(err));
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