//import liraries
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardScreen from './screens/OnBoardScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

import AsyncStorage from '@react-native-community/async-storage';

const AppStack = createStackNavigator();

// create a component
const App = () => {
  const [firstLaunch, setFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched')
      .then((value) => {
        if (value === null) {
          AsyncStorage.setItem('alreadyLaunched', JSON.stringify(true));
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
          <AppStack.Screen name="SignUpScreen" component={SignUpScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    // return <LoginScreen />;
    return <SignUpScreen />;
  }
};

//make this component available to the app
export default App;
