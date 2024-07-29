import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

type radioContainerProps = {
  isSelected?: boolean;
  option: string;
} & TouchableOpacityProps;

const radioContainer = ({
  isSelected,
  option,
  ...touchableOpacityProps
}: radioContainerProps) => {
  return (
    <TouchableOpacity {...touchableOpacityProps} style={[styles.optionItem]}>
      <View style={[styles.container]}>
        {isSelected && (
          <View
            testID="radio-fill"
            style={[
              styles.fill,
              isSelected ? styles.activeRadioFill : styles.inActiveRadioFill,
            ]}
          />
        )}
      </View>
      <Text style={[styles.optionText]}>{option}</Text>
    </TouchableOpacity>
  );
};

export default radioContainer;

const styles = StyleSheet.create({
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
  activeRadioButtonContainer: {
    borderColor: colors.white,
  },
  inActiveRadioButtonContainer: {
    borderColor: colors.primary,
  },
  activeRadioFill: {
    backgroundColor: colors.primary,
  },
  inActiveRadioFill: {
    backgroundColor: colors.white,
  },
  optionText: {
    fontSize: 18,
    width: '85%',
  },
  activeOptionTextColor: {
    color: colors.white,
  },
  inActiveOptionTextColor: {
    color: colors.black,
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
  activeOptionContainer: {
    backgroundColor: colors.primary,
  },
  inActiveOptionContainer: {
    backgroundColor: colors.transparent,
  },
});
