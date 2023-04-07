import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from 'components/MealList/List';
import { MEALS } from 'data/mock-data';

function FavouritesScreen() {
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  if (favouriteMealIds.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet</Text>
      </View>
    );
  }

  const favouriteMeals = MEALS.filter((meal) => favouriteMealIds.includes(meal.id));

  return <MealList items={favouriteMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
