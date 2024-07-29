import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
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

  buttonContainer: {
    gap: 20,
  },
  btnStyle: {
    backgroundColor: colors.primary,
  },
  greenTextStyle: {
    color: colors.green,
  },
  redTextStyle: {
    color: colors.red,
  },
  yellowTextStyle: {
    color: colors.yellow,
  },
  riskTextStyle: {
    fontWeight: '900',
    fontSize: 24,
  },
});
