import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { GARY } from '../colors';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({ title, placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        {...props}
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={GARY.DEFAULT}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

Input.defaultProps = {
  keyboardType: KeyboardTypes.DEFAULT,
  returnKeyType: ReturnKeyTypes.DONE,
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  keyboardtype: PropTypes.oneOf(Object.values(KeyboardTypes)),
  returnkeytype: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
  secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
  },
});

export default Input;
