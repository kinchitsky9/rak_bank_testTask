import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: colors.gray,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
    justifyContent: 'center',
  },
});
