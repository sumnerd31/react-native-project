import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen';
import ChicagoDetailScreen from './src/screens/ChicagoDetailScreen';
import CanadaDetailScreen from './src/screens/CanadaDetailScreen';
import NewYorkDetailScreen from './src/screens/NewYorkDetailScreen';
import VideoScreen from './src/screens/VideoScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Video">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'City'}}/>
        <Stack.Screen name="ChicagoDetail" component={ChicagoDetailScreen} options={{title: 'Chicago'}} />
        <Stack.Screen name="CanadaDetail" component={CanadaDetailScreen} options={{title: 'Canada'}} />
        <Stack.Screen name="NewYorkDetail" component={NewYorkDetailScreen} options={{title: 'New York'}} />
        <Stack.Screen name="Video" component={VideoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;