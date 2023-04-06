import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from 'screens/CategoriesScreen';
import MealsOverviewScreen from 'screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3F2F25' },
          }}
        >
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{ title: 'All Categories' }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
