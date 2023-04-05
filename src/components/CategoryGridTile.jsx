import PropTypes from 'prop-types';
import { Pressable, Text, View } from 'react-native';

function CategoryGridTile({ title, color }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

CategoryGridTile.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

CategoryGridTile.defaultProps = {
  title: '',
  color: '',
};

export default CategoryGridTile;
