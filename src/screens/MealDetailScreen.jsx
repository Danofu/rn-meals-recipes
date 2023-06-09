import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useCallback, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from 'components/IconButton';
import List from 'components/MealDetail/List';
import MealDetails from 'components/MealDetails';
import Subtitle from 'components/MealDetail/Subtitle';
import { MEALS } from 'data/mock-data';
import { addFavourite, removeFavourite } from 'store/redux/favourites';
import { screenDefaultProps, screenPropTypes } from 'utils/prop-types';

function MealDetailScreen({ route, navigation }) {
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();

  const { mealId } = route.params;

  const { imageUrl, title, duration, complexity, affordability, ingredients, steps } = MEALS.find(
    (meal) => meal.id === mealId
  );

  const mealIsFavourite = favouriteMealIds.includes(mealId);

  const changeFavouriteStatusHandler = useCallback(
    () => dispatch(mealIsFavourite ? removeFavourite({ id: mealId }) : addFavourite({ id: mealId })),
    [dispatch, mealId, mealIsFavourite]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={changeFavouriteStatusHandler}
          icon={mealIsFavourite ? 'star' : 'star-outline'}
          color="white"
        />
      ),
    });
  }, [navigation, mealIsFavourite, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={{ color: 'white' }}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

MealDetailScreen.propTypes = { ...screenPropTypes };

MealDetailScreen.defaultProps = { ...screenDefaultProps };

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
