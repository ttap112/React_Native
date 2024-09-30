import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { GARY, PRIMARY, BLACK } from '../colors';
import { useState, forwardRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vertoc-icons';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

export const IconNames = {
  EMAIL: 'eamil',
  PASSWORD: 'lock',
};

const Input = ({ title, placeholder, value, iconName, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          isFocused && styles.focusedTitle,
          isFocused && styles.hasValueTitle,
        ]}
      >
        {title}
      </Text>
      <TextInput
        {...props}
        ref={ref}
        style={[
          styles.input,
          isFocused && styles.focusedInput,
          value && styles.hasValueInput,
        ]}
        placeholder={placeholder ?? title}
        placeholderTextColor={GARY.DEFAULT}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => setIsFocused(true)}
        onBlue={() => setIsFocused(false)}
      />
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={() => {
            switch (true) {
              case isFocused:
                return PRIMARY.DEFAULT;
              case !!value:
                return BLACK;
              default:
                return GARY.DEFAULT;
            }
          }}
        />
      </View>
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
  value: PropTypes.string,
  iconName: PropTypes.oneOf(Object.values(IconNames)),
};

const styles = StyleSheet.create({
  hasValueInput: {
    color: BLACK,
  },
  hasValueTitle: {
    borderColor: BLACK,
    color: BLACK,
  },
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GARY.DEFAULT,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
    borderColor: GARY.DEFAULT,
    paddingLeft: 30,
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
});

export default Input;
