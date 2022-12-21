<<<<<<< HEAD
import Login from './screens/login';
import Home from './screens/Home';
import Profile from './screens/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
=======
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/navigation";
>>>>>>> 91187be (Created nav bar)

export default function App() {
  return (
    // test

<<<<<<< HEAD
  <Stack.Screen 
  name='Login'
  component={Login}
  />

  <Stack.Screen
  name='Home'
  component={Home}
  />

<Stack.Screen
  name='Profile'
  component={Profile}
  />
</Stack.Navigator>
</NavigationContainer>
    
=======
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
>>>>>>> 91187be (Created nav bar)
  );
}
