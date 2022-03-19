import { useSelector, useDispatch } from "react-redux";

import {setSearchDish, clearSearchDish} from '../../actions/actions';


const SearchDishes = () => {
   const searchDish = useSelector(state => state.searchDish);
   console.log(searchDish);
   const dispatch = useDispatch();

   const onSearchDishChangeHandler = (e) => {
      const userInput = e.target.value;
      dispatch(setSearchDish(userInput));
   };

   const onClearSearchDishHandler = () => {
      dispatch(clearSearchDish());
   };


   return (
      <div className="search__container">
         <input 
            type="text" 
            placeholder="Поиск блюда"
            value={searchDish}
            onChange={onSearchDishChangeHandler}
         />
         {searchDish.length > 0 && (
            <button
               onClick={onClearSearchDishHandler}
               type="button"
            >
               x
            </button>
         )}
      </div>
   );
};

export default SearchDishes;