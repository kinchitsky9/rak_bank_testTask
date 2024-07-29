import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {AppNavigationProps, AppStackParams} from '../../App';
import Button from '../components/button';
import {colors} from '../utils/colors';
import {strings} from '../utils/strings';
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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '900',
  },
  descriptionContainer: {
    gap: 15,
  },
  descriptionText: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 18,
  },
  riskWrapper: {
    alignItems: 'center',
    gap: 40,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    paddingHorizontal: 10,
    paddingVertical: 30,
    elevation: 10,
    margin: 20,
    borderRadius: 10,
    shadowRadius: 5,
  },
  thankYouText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
  buttonContainer: {
    gap: 20,
  },
  btnStyle: {
    backgroundColor: colors.primary,
  },
  greenTextStyle: {
    color: 'green',
  },
  redTextStyle: {
    color: 'red',
  },
  yellowTextStyle: {
    color: '#FFBF00',
  },
  riskTextStyle: {
    fontWeight: '900',
    fontSize: 24,
  },
});
