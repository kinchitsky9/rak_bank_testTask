import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

type buttonProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
} & TouchableOpacityProps;

const Button = ({
  title,
  disabled,
  style,
  ...touchableOpacityProps
}: buttonProps) => {
  return (
    <TouchableOpacity
      {...touchableOpacityProps}
      testID="button"
      style={[styles.container, style, disabled && styles.disabled]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
