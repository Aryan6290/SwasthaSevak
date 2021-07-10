import React from 'react';

import {RootStackParamsList} from './data/params';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
interface StackRouterProps {}

const Stack = createStackNavigator<RootStackParamsList>();

const StackRouter: React.FC<StackRouterProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="SIGNUP">
        <Stack.Screen name="SPLASH" component={SplashScreen} />
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="SIGNUP" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
