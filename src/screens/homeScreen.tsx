import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {strings} from '../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../App';
import {colors} from '../utils/colors';
import Button from '../components/button';

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>{strings.welcome}</Text>
      <View style={styles.shadowContainer}>
        <Text style={styles.description}>{strings.description}</Text>
        <View>
          <Button
            title="Begin"
            onPress={() => {
              navigation.navigate('QuestionsScreen');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  welcome: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: colors.primary,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  shadowContainer: {
    alignItems: 'center',
    gap: 40,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    paddingHorizontal: 5,
    paddingVertical: 30,
    elevation: 10,
    margin: 20,
    borderRadius: 10,
    shadowRadius: 5,
  },
});
