import React, {useState} from "react";
import {View, Text, Button} from "react-native";
import HalamanLayout from "./src/HalamanLayout";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MateriPropState = () => {
  const [count, setCount] = useState(0);

  return(
    <View>
      <Text style={{fontSize:30}}> Belajar Props</Text>
      <HalamanLayout nama_depan="Erfian" nama_belakang="Junianto"/>
      <Text style={{fontSize:30}}>You clicked {count} times</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize:50,}}>Ini halaman home</Text>
      <Button
        title="Halaman Profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Erfian'})
        }
      />
    </View>
  );
}

const ProfileScreen = ({navigation, route}) => {
  return (
    <View>
      <Text style={{fontSize:50,}}>Ini halaman profilnya si {route.params.name}</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Aplikasi Berita'}}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;