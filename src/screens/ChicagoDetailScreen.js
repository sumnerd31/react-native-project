import React from 'react';
import {Text, View, StyleSheet, Button, Image } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

const ChicagoDetailScreen = () => {
  return(

    <SafeAreaProvider >
      <View style={{width:420, height:250, borderWidth: 1 }}>
          <Image style={styles.tinyLogo} source={{uri: 'https://cdn.choosechicago.com/uploads/2019/05/loop-1800x900.jpg'}} />
          <View>
            
            <Text style={styles.detailText}>
            {"\n"}
            {"\n"}
              Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, 
              it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower 
              (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, 
              including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works. 
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

export default ChicagoDetailScreen;