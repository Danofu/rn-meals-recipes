import PropTypes from 'prop-types';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from 'components/MealItem';
import { MEALS } from 'data/mock-data';

function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderItem = ({ item }) => {
    const { title, imageUrl, complexity, duration, affordability } = item;
    const mealItemProps = { title, imageUrl, complexity, duration, affordability };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

MealsOverviewScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

MealsOverviewScreen.defaultProps = {};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
