import { Text } from 'react-native';

import { screenDefaultProps, screenPropTypes } from 'utils/prop-types';

function MealDetailScreen({ route }) {
  const { mealId } = route.params;
  return <Text>This is the Meal Detail Screen ({mealId})</Text>;
}

MealDetailScreen.propTypes = { ...screenPropTypes };

MealDetailScreen.defaultProps = { ...screenDefaultProps };

export default MealDetailScreen;
