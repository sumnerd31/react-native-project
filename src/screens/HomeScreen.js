import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{width:420, height:250, borderWidth: 1, backgroundColor: 'powderblue' }}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('ChicagoDetail') }>
            <Image style={styles.tinyLogo} source={{uri: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iiCWw9wz_VbI/v0/1000x-1.jpg'}} />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.baseText}>
                    Chicago
                  </Text>
              </View>
          </TouchableOpacity>
        </View>
        
        <View style={{width:420, height:250, borderWidth: 1, backgroundColor: 'skyblue' }}>
          <TouchableOpacity 
              onPress={() => navigation.navigate('CanadaDetail') }>
            <Image style={styles.tinyLogo} source={{uri: 'https://d3e1m60ptf1oym.cloudfront.net/780c6ab0-ba06-45f0-81af-91c72759e39a/L23617-Pano-FR-01_xgaplus.jpg'}} />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.baseText}>
                  Canada
                </Text>
              </View>
          </TouchableOpacity>
        </View>

        <View style={{width:420, height:250, borderWidth: 1, backgroundColor: 'lightgray' }}>
          <TouchableOpacity 
              onPress={() => navigation.navigate('NewYorkDetail') }>
            <Image style={styles.tinyLogo} source={{uri: 'https://cdn.shopify.com/s/files/1/0011/6208/4407/products/Art_3079_2000x.jpg?v=1566392227'}} />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.baseText}>
                    New York
                  </Text>
              </View>
          </TouchableOpacity>
        </View>

        <View style={{width:420, height:250, borderWidth: 1, backgroundColor: 'lightgray' }}>
          <TouchableOpacity 
              onPress={() => navigation.navigate('ParisDetail') }>
            <Image style={styles.tinyLogo} source={{uri: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72'}} />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.baseText}>
                    Paris
                  </Text>
              </View>
          </TouchableOpacity>
        </View>

        <View style={{width:420, height:250, borderWidth: 1, backgroundColor: 'lightgray' }}>
          <TouchableOpacity 
              onPress={() => navigation.navigate('LADetail') }>
            <Image style={styles.tinyLogo} source={{uri: 'https://www.oxy.edu/sites/default/files/styles/banner_image/public/page/banner-images/los-angeles_main_1440x800.jpg?itok=e8p15lFb'}} />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.baseText}>
                    Los Angeles
                  </Text>
              </View>
          </TouchableOpacity>
        </View>

        
      </ScrollView>
  
    </SafeAreaView>
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
  }
});

export default HomeScreen;