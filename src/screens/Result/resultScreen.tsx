import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {AppNavigationProps, AppStackParams} from '../../../App';
import Button from '../../components/Button/button';
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
        <Text style={styles.titleText}>Your Risk Score</Text>
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
            <Text style={styles.descriptionText}>
              'You have a low-risk score, showing a preference for conservative
              investment strategies. You prioritize stability and security,
              opting for lower returns in exchange for minimized risk. We’ll
              guide you to bank account options that suit your cautious
              investment approach.'
            </Text>
          ) : isMediumRisk ? (
            <Text style={styles.descriptionText}>
              'You have a medium-risk score, indicating a balanced approach to
              investing. You’re open to taking some risks for moderate returns
              while maintaining a level of security. We’ll recommend bank
              account options that match your balanced investment style.'
            </Text>
          ) : (
            <Text style={styles.descriptionText}>
              'You have a high-risk score, indicating a preference for bold and
              aggressive investment strategies. This suggests you’re comfortable
              with higher volatility in pursuit of greater returns. We’ll guide
              you to bank account options that align with your adventurous
              investment approach.'
            </Text>
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btnStyle}
          title="Back"
        />
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
