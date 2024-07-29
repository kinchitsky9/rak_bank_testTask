import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../../App';
import Button from '../../components/Button/button';
import {styles} from './styles';

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>'Welcome to RAK-bank'</Text>
      <View style={styles.shadowContainer}>
        <Text style={styles.description}>'Answer a few questions about your investment preferences to find out your risk profile. This will help us recommend the best options for opening a bank account that suits your needs.'</Text>
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
