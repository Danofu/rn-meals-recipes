import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function MealDetails({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

MealDetails.propTypes = {
  duration: PropTypes.number,
  complexity: PropTypes.string,
  affordability: PropTypes.string,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

MealDetails.defaultProps = {
  duration: NaN,
  complexity: '',
  affordability: '',
  style: {},
  textStyle: {},
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
