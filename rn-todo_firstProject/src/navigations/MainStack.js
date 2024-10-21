import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screen/ListScreen';
import { PRIMARY, WHITE } from '../colors';
import HeaderRightButton from '../component/HeaderRightButton';
import HeaderLeftButton from '../component/HeaderLeftButton';
import SettingsScreen from '../screen/SettingsScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'TODO List',
          headerRight: HeaderRightButton,
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
