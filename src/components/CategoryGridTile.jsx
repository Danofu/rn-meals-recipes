import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: tinycolor(color).lighten().toHexString() }}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: color },
          pressed && Platform.OS === 'ios' && styles.buttonPressed,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

CategoryGridTile.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

CategoryGridTile.defaultProps = {
  title: '',
  color: '',
  onPress: () => {},
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // make sure that press ripple effect doesn't overflow on the android
    // and shadow is not hidden on the ios
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
