import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fill: {
    height: '80%',
    width: '80%',
    borderRadius: 30,
    backgroundColor: colors.primary,
  },
  selectedRadioFill: {
    backgroundColor: colors.primary,
  },
  unSelectedRadioFill: {
    backgroundColor: colors.white,
  },
  optionText: {
    fontSize: 18,
    width: '85%',
  },
  optionItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 15,
    borderRadius: 40,
  },
});
