import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import { MEALS } from 'data/mock-data';

function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
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
