import { FlatList } from 'react-native';

import CategoryGridTile from 'components/CategoryGridTile';
import { CATEGORIES } from 'data/mock-data';

function CategoriesScreen() {
  const renderItem = ({ item }) => <CategoryGridTile color={item.color} title={item.title} />;

  return <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} />;
}

export default CategoriesScreen;
