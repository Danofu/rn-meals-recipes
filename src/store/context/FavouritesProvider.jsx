import { createContext, useMemo, useState } from 'react';

import { childrenDefaultProps, childrenPropTypes } from 'utils/prop-types';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (_id) => {},
  removeFavourite: (_id) => {},
});

function FavouritesProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavourite = (id) => setFavouriteMealIds((prevFavouriteMealIds) => [...prevFavouriteMealIds, id]);

  const removeFavourite = (id) =>
    setFavouriteMealIds((prevFavouriteMealIds) => prevFavouriteMealIds.filter((mealId) => mealId !== id));

  const value = useMemo(() => ({ ids: favouriteMealIds, addFavourite, removeFavourite }), [favouriteMealIds]);

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

FavouritesProvider.propTypes = { ...childrenPropTypes };

FavouritesProvider.defaultProps = { ...childrenDefaultProps };

export default FavouritesProvider;
