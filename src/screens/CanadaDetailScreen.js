import React from 'react';
import {Text, View, StyleSheet, Button, Image } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

const CanadaDetailScreen = () => {
  return(

    <SafeAreaProvider >
      <View style={{width:420, height:250, borderWidth: 1 }}>
          <Image style={styles.tinyLogo} source={{uri: 'https://www.state.gov/wp-content/uploads/2019/04/Canada-e1556023963820-2500x1406.jpg'}} />
          <View>
            
            <Text style={styles.detailText}>
            {"\n"}
            {"\n"}
            Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific 
            and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world's second-largest country by total area.
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

export default CanadaDetailScreen;