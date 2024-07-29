import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {AppNavigationProps, AppStackParams} from '../../../App';
import Button from '../../components/Button/button';
import {strings} from '../../utils/strings';
import {styles} from './styles';
type ResultRouteProps = RouteProp<AppStackParams, 'ResultScreen'>;

const ResultScreen = () => {
  const {params} = useRoute<ResultRouteProps>();
  const navigation = useNavigation<AppNavigationProps>();
  const calculatedRisk = params.totalScore;

  const isLowRisk = calculatedRisk <= 6;
  const isMediumRisk = calculatedRisk <= 12;

  const getRisk = () => {
    if (isLowRisk) return 'Low Risk';
    else if (isMediumRisk) return 'Medium Risk';
    else return 'High Risk';
  };

  const getRiskTextStyle = () => {
    if (isLowRisk) {
      return styles.greenTextStyle;
    } else if (isMediumRisk) {
      return styles.yellowTextStyle;
    } else {
      return styles.redTextStyle;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.riskWrapper}>
        <Text style={styles.titleText}>{strings.yourScore}</Text>
        <View style={{alignItems: 'center'}}>
          <Text style={[styles.riskTextStyle, getRiskTextStyle()]}>
            {calculatedRisk}
          </Text>
          <Text style={[styles.riskTextStyle, getRiskTextStyle()]}>
            {getRisk()}
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          {isLowRisk ? (
            <Text style={styles.descriptionText}>{strings.highRisk}</Text>
          ) : isMediumRisk ? (
            <Text style={styles.descriptionText}>{strings.mediumRisk}</Text>
          ) : (
            <Text style={styles.descriptionText}>{strings.lowRisk}</Text>
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btnStyle}
          title={strings.back}
        />
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
