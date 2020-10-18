//import liraries
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardScreen from './screens/OnBoardScreen';
import LoginScreen from './screens/LoginScreen';

import AsyncStorage from '@react-native-community/async-storage';

const AppStack = createStackNavigator();

// create a component
const App = () => {
  const [firstLaunch, setFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched')
      .then((value) => {
        if (value === null) {
          AsyncStorage.setItem('alreadyLaunched', true);
          setFirstLaunch(true);
        } else {
          setFirstLaunch(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (firstLaunch === null) {
    return null;
  } else if (firstLaunch === true) {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={OnboardScreen} />
          <AppStack.Screen name="LoginScreen" component={LoginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    <LoginScreen />;
  }
};

//make this component available to the app
export default App;
