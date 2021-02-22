import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import demo from './Components/demo'
import axios from 'axios'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


function Homescreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Lets Explore !</Text>
      <Button title="Go to startup"
        onPress={() => navigation.navigate('Nature')}></Button>
    </View>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Nature' component={demo} />
        <Stack.Screen name='Home' component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
