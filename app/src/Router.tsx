import React from 'react';

import {RootStackParamsList} from './data/params';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import NavigationDrawer from './drawer/NavigationDrawer';
interface StackRouterProps {}

const Stack = createStackNavigator<RootStackParamsList>();

const StackRouter: React.FC<StackRouterProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="SPLASH">
        <Stack.Screen name="SPLASH" component={SplashScreen} />
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="SIGNUP" component={SignupScreen} />
        <Stack.Screen name="HOME" component={NavigationDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
