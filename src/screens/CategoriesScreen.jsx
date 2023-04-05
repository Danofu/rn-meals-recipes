import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import CategoryGridTile from 'components/CategoryGridTile';
import { CATEGORIES } from 'data/mock-data';

function CategoriesScreen({ navigation }) {
  const renderItem = ({ item }) => {
    const pressHandler = () => navigation.navigate('MealsOverview', { categoryId: item.id });

    return <CategoryGridTile color={item.color} title={item.title} onPress={pressHandler} />;
  };

  return <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} />;
}

CategoriesScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};

CategoriesScreen.defaultProps = {};

export default CategoriesScreen;
