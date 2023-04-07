import { useLayoutEffect } from 'react';

import MealList from 'components/MealList/List';
import { CATEGORIES, MEALS } from 'data/mock-data';
import { screenDefaultProps, screenPropTypes } from 'utils/prop-types';

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealList items={displayedMeals} />;
}

MealsOverviewScreen.propTypes = { ...screenPropTypes };

MealsOverviewScreen.defaultProps = { ...screenDefaultProps };

export default MealsOverviewScreen;
