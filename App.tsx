import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/homeScreen';
import QuestionsScreen from './src/screens/questionsScreen';
import ResultScreen from './src/screens/resultScreen';

export type AppStackParams = {
  HomeScreen: undefined;
  QuestionsScreen: undefined;
  ResultScreen: {totalScore: number};
};

export type AppNavigationProps = StackNavigationProp<AppStackParams>;

const Stack = createStackNavigator<AppStackParams>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
