import PropTypes from 'prop-types';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from 'components/MealList/MealItem';

function List({ items }) {
  const renderItem = ({ item }) => {
    const { id, title, imageUrl, complexity, duration, affordability } = item;
    const mealItemProps = { id, title, imageUrl, complexity, duration, affordability };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

List.propTypes = {
  items: PropTypes.array,
};

List.defaultProps = {
  items: [],
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
