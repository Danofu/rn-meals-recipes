import PropTypes from 'prop-types';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from 'components/MealDetails';

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const { navigate } = useNavigation();

  const selectMealItemHandler = () => navigate('MealDetail', { mealId: id });

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#CCC' }}
        style={({ pressed }) => [styles.button, pressed && Platform.OS === 'ios' && styles.buttonPressed]}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
}

MealItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  duration: PropTypes.number,
  complexity: PropTypes.string,
  affordability: PropTypes.string,
};

MealItem.defaultProps = {
  id: '',
  title: '',
  imageUrl: '',
  duration: NaN,
  complexity: '',
  affordability: '',
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // make sure that press ripple effect doesn't overflow on the android
    // and shadow is not hidden on the ios
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
