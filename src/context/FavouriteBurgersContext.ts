import React, { createContext } from 'react';
import { FavouriteBurger } from '../types/App';

type FavouriteBurgersContextType = {
    favouriteBurgers: FavouriteBurger[]
    setFavouriteBurgers: React.Dispatch<React.SetStateAction<FavouriteBurger[]>>
};

export const FavouriteBurgersContext = createContext<FavouriteBurgersContextType>({
    favouriteBurgers: [],
    setFavouriteBurgers: () => { },
});