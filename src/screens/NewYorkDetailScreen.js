import React from 'react';
import {Text, View, StyleSheet, Button, Image } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

const NewYorkDetailScreen = () => {
  return(

    <SafeAreaProvider >
      <View style={{width:420, height:250, borderWidth: 1 }}>
          <Image style={styles.tinyLogo} source={{uri: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-122180577_high.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312'}} />
          <View>
            <Text style={styles.detailText}>
              {"\n"}
              {"\n"}
              New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. 
              At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. 
              Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.
            </Text>
          </View>
      </View>
    </SafeAreaProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  tinyLogo: {
    width: 420,
    height: 250,
    
  },
  baseText:{
    fontFamily: 'Cochin',
    color: 'white',
    fontSize: 40,
    textAlign: 'left',
    fontWeight: 'bold'
    
  },
  titleText:{
    fontSize: 20,
    textAlign: 'center'
  },
  detailText:{
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Cochin',
    justifyContent: 'flex-start'
  }
})

export default NewYorkDetailScreen;