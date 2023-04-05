import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import CategoryGridTile from 'components/CategoryGridTile';
import { CATEGORIES } from 'data/mock-data';

function CategoriesScreen({ navigation }) {
  const pressHandler = () => navigation.navigate('MealsOverview');

  const renderItem = ({ item }) => <CategoryGridTile color={item.color} title={item.title} onPress={pressHandler} />;

  return <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} />;
}

CategoriesScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};

CategoriesScreen.defaultProps = {};

export default CategoriesScreen;
