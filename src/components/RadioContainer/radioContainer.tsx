import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

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
              isSelected
                ? styles.selectedRadioFill
                : styles.unSelectedRadioFill,
            ]}
          />
        )}
      </View>
      <Text style={[styles.optionText]}>{option}</Text>
    </TouchableOpacity>
  );
};

export default radioContainer;
