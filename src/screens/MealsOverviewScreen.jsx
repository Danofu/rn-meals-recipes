import { FlatList, StyleSheet, View } from 'react-native';
import { useLayoutEffect } from 'react';

import MealItem from 'components/MealItem';
import { CATEGORIES, MEALS } from 'data/mock-data';
import { screenDefaultProps, screenPropTypes } from 'utils/prop-types';

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderItem = ({ item }) => {
    const { id, title, imageUrl, complexity, duration, affordability } = item;
    const mealItemProps = { id, title, imageUrl, complexity, duration, affordability };
    return <MealItem {...mealItemProps} />;
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

MealsOverviewScreen.propTypes = { ...screenPropTypes };

MealsOverviewScreen.defaultProps = { ...screenDefaultProps };

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
