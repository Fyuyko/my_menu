const initialState = {
   allDishes: [],
   favoriteDishes: [],
   searchDish: '',
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'allDishes/loadData':
         return {
            ...state,
            allDishes: action.payload,
         };
      case 'favoriteDishes/addDishes':
         return {
            ...state,
            allDishes: state.allDishes.filter(dish => dish !== action.payload),
            favoriteDishes: [...state.favoriteDishes, action.payload],
         };
      case 'favoriteDishes/removeDishes':
         return {
            ...state,
            allDishes: [...state.allDishes, action.payload],
            favoriteDishes: state.favoriteDishes.filter(dish => dish.id !== action.payload.id),
         };
      case 'searchDish/setSearchDish':      //сам фильтр реализован в DishesMenu
         return {
            ...state,
            searchDish: action.payload,
         };
      case 'searchDish/clearSearchDish':
         return {
            ...state,
            searchDish: '',      
         };
      default:
         return state;
   }
};

export default reducer;