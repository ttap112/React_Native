import { StyleSheet, Text, View, Image, Keyboard, Alert } from 'react-native';
import Input, {
  KeyboardTypes,
  ReturnKeyTypes,
  IconNames,
} from '../components/input';
import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button';
import { signIn } from '../api/auth';
const SingInScreen = () => {
  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!isLoading && !disabled) {
      try {
        Keyboard.dismiss();
        const data = await signIn(email, password);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        Alert.alert('로그인 실패', error, [
          { text: '확인', onPress: () => setIsLoading(false) },
        ]);
      }
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/main.png')} style={styles.image} />
      <Input
        title={'이메일'}
        placeholder="test@email.com"
        keyboardType={KeyboardTypes.EMAIL}
        returnKeyType={ReturnKeyTypes.NEXT}
        value={email}
        onChangeText={(email) => setEamil(email.trim())}
        iconName={IconNames.EMAIL}
        onSubmitEditing={() => passwordRef.current.focus()}
      />

      <Input
        ref={passwordRef}
        title={'비밀번호'}
        returnKeyType={ReturnKeyTypes.DONE}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password.trim())}
        iconName={IconNames.PASSWORD}
        onSubmitEditing={onSubmit}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="로그인"
          onPress={onSubmit}
          disabled={disabled}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SingInScreen;
