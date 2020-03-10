import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import CityList from "./app/screens/CityList";
import LoginScreen from "./app/auth/LoginScreen";


const App = () => {
  return (
      <View style={styles.container}>
       <LoginScreen/>
       <CityList/>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,

  },
  text: {
    color: '#fff', fontSize: 70

  },





});



export default App;



