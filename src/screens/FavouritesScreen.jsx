import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';

import MealList from 'components/MealList/List';
import { FavouritesContext } from 'store/context/FavouritesProvider';
import { MEALS } from 'data/mock-data';

function FavouritesScreen() {
  const { ids: favouriteIds } = useContext(FavouritesContext);

  if (favouriteIds.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet</Text>
      </View>
    );
  }

  const favouriteMeals = MEALS.filter((meal) => favouriteIds.includes(meal.id));

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
