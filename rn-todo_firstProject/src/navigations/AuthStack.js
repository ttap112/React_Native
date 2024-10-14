import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screen/SignInScreens';
import ListScreen from '../screen/ListScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
