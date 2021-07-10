import React from 'react';
import {StatusBar} from 'react-native';
import StackRouter from './src/Router';

const App = () => {
  return (
    <>
      <StatusBar animated backgroundColor="#ffffff00" translucent />
      <StackRouter />
    </>
  );
};

export default App;
