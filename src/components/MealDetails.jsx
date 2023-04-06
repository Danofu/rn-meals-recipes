import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

MealDetails.propTypes = {
  duration: PropTypes.number,
  complexity: PropTypes.string,
  affordability: PropTypes.string,
};

MealDetails.defaultProps = {
  duration: NaN,
  complexity: '',
  affordability: '',
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
