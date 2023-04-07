import { createContext } from 'react';

import { childrenDefaultProps, childrenPropTypes } from 'utils/prop-types';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (_id) => {},
  removeFavourite: (_id) => {},
});

function FavouritesProvider({ children }) {


  return <FavouritesContext.Provider value={{}}>{children}</FavouritesContext.Provider>;
}

FavouritesProvider.propTypes = { ...childrenPropTypes };

FavouritesProvider.defaultProps = { ...childrenDefaultProps };

export default FavouritesProvider;
