/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {useState} from 'react'

const App: () => React$Node = () => {
  const [value,setValue] = useState('');

  const handleClick = () =>{
    if(value.trim().length > 0){
      ToastAndroid.showWithGravity(
        value.trim(),
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{width: '100%', height: '100%'}}>
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
          <Text style={styles.title}>Enter what you want</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value)=>setValue(value)}
            value={value}
          />
          <Button
            style={styles.button}
            title=" Click Me "
            color="#841584"
            onPress={handleClick}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title:{
    margin: 5
  },
  input:{
    margin: 5,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width: '80%'
  },
  button:{
    margin: 5,
    width: 200,
  }
});

export default App;
