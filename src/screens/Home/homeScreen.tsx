import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {strings} from '../../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../../App';
import Button from '../../components/Button/button';
import {styles} from './styles';

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
