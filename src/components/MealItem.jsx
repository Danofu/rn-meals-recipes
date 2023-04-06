import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

function MealItem({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

MealItem.propTypes = {
  title: PropTypes.string,
};

MealItem.defaultProps = {
  title: '',
};

export default MealItem;
