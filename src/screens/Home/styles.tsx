import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
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
