import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './stores';

import { View, Text } from 'react-native';

import useFont from './utility/useFont';

import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  const isFontLoaded = useFont();

  if (!isFontLoaded) {
    return (
      <View style={{ flex: 1, justfyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'MainLayout'}
        >
          <Stack.Screen name='MainLayout' component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
