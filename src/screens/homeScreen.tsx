import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {strings} from '../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../App';
import {colors} from '../utils/colors';

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>{strings.welcome}</Text>
      <View>
        <Text style={styles.descriptionText}>{strings.description}</Text>
      </View>

      <View style={styles.getStartedContainer}>
        {/* <View>
          <Text style={styles.getStartedText}>{strings.getStarted}</Text>
          <Text style={styles.tapStartText}>{strings.tapStart}</Text>
        </View> */}
        {/* <Button
          title="Begin"
          onPress={() => {
            navigation.navigate('QuestionsScreen');
          }}
        /> */}
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
  welcomeText: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: colors.primary,
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  getStartedContainer: {
    gap: 20,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  tapStartText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
