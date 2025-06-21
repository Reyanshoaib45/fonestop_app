import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '@/screens/LandingScreen';
import CustomersScreen from '@/screens/CustomersScreen';

// 1. Define your route parameters
type RootStackParamList = {
    Landing: undefined;
    Customers: undefined;
};

// 2. Create the navigator with type safety
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen
                    name="Landing"
                    component={LandingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Customers" // Must match exactly what you'll navigate to
                    component={CustomersScreen}
                    options={{ title: 'Customer Management' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}