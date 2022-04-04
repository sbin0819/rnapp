import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {
  hasMarginBottom?: boolean;
  onChangeText?: any;
  value?: any;
  placeholder?: any;
  [x: string]: any;
}
function BorderedInput(props: Props, ref: any) {
  const {hasMarginBottom, onChangeText, value, placeholder, ...rest} = props;
  return (
    <TextInput
      style={[styles.input, hasMarginBottom && styles.margin]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
  },
  margin: {
    marginBottom: 16,
  },
});

export default React.forwardRef(BorderedInput);
