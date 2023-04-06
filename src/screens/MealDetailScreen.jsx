import { Image, Text, View } from 'react-native';

import { MEALS } from 'data/mock-data';
import { screenDefaultProps, screenPropTypes } from 'utils/prop-types';
import MealDetails from '../components/MealDetails';

function MealDetailScreen({ route }) {
  const { mealId } = route.params;

  const { imageUrl, title, duration, complexity, affordability, ingredients, steps } = MEALS.find(
    (meal) => meal.id === mealId
  );

  return (
    <View>
      <Image source={{ uri: imageUrl }} />
      <Text>{title}</Text>
      <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
      <Text>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

MealDetailScreen.propTypes = { ...screenPropTypes };

MealDetailScreen.defaultProps = { ...screenDefaultProps };

export default MealDetailScreen;
