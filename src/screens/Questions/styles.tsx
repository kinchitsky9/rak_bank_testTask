import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  contentStyle: {
    paddingHorizontal: 15,
    flex: 1,
    gap: 30,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 90,

    paddingVertical: 10,
  },

  questionContainer: {
    flex: 1,
    gap: 30,
  },
  questionCard: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    shadowRadius: 10,
    minHeight: height * 0.5,
    gap: 40,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
  },
  optionsContainer: {
    gap: 20,
  },

  btnStyle: {
    backgroundColor: colors.primary,
  },
  questionTest: {
    fontSize: 20,
    fontWeight: '900',
  },
});
