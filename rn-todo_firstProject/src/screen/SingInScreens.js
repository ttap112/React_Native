import { StyleSheet, Text, View, Image } from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/input';
import { useState } from 'react';

const SingInScreen = () => {
  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);

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
      />

      <Input
        title={'비밀번호'}
        returnKeyType={ReturnKeyTypes.DONE}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password.trim())}
      />
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
