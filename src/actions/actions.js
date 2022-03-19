import allDishesData from '../data';

export const loadData = () => {    //all
   return {
      type: 'allDishes/loadData',
      payload: allDishesData,
   };
};

export const addDishes = (dish) => {   //favorite
   return {
      type: 'favoriteDishes/addDishes',
      payload: dish,
   };
};
 
export const removeDishes = (dish)  => {
   return {
      type: 'favoriteDishes/removeDishes',
      payload: dish,
   };
};

export const setSearchDish = (dish) => {   //search
   return {
      type: 'searchDish/setSearchDish',
      payload: dish,
   };
};
 
export const clearSearchDish = () => {
   return {
      type: 'searchDish/clearSearchDish',
   };
};