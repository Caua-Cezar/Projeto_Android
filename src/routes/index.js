import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome.js';
import SignIn from '../pages/SignIn.js';
import SingUp from '../pages/SingUp.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}