import React from 'react';
import {Dimensions, View, StyleSheet, Text} from 'react-native'
import styled from "styled-components/native";
import { Video } from 'expo-av'
import {TextInput, Button} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const VideoScreen = ({navigation}) => {
  return(
    <View>
      <Video
        source={require("../../assets/Tech_Tiles.mp4")}
        style={styles.backgroundVideo}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      
      <Text style={styles.baseText}>
        Cityscape
      </Text>
      
      <View marginLeft={50} marginRight={50} marginTop={300}>
        <TextInput 
          style={styles.textInput}
          label={'username'}
          mode={'outlined'}
        />
        <TextInput 
          style={styles.textInput}
          secureTextEntry={true}
          label={'password'}
          mode={'outlined'}
        />
      </View>

      <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Home')}>
        Login
      </Button>
  
    </View>
  
  );
}


const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row'
    },
    textInput: {
      justifyContent: 'center',
      fontSize: 20,
      fontFamily: 'Cochin',
      color: 'white',
      textAlign: 'center'
    },
    button: {
      marginTop: 50,
      marginLeft: 50,
      marginRight: 50

    },
    baseText:{
      fontFamily: 'Cochin',
      color: 'white',
      fontSize: 40,
      textAlign: 'left',
      fontWeight: 'bold'
      
    },
  });

export default VideoScreen;