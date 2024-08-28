// App.js
import * as React from 'react';
import Navigator from './navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
};
export default App;
