import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
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
  );
};

export default App;
