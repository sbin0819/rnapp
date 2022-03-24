import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import {LogContextProvider} from './src/contexts/LogContext';
import {SearchContextProvider} from './src/contexts/SearchContext';

function App() {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}

export default App;
