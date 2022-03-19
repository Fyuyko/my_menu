import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import {addDishes, loadData} from '../../actions/actions';

import heart from '../../assets/heart.gif';
import './dishesMenu.scss';

const DishesMenu = () => {
   const selectAllDishes = useSelector(state => state.allDishes);    
   const selectSearchDish = useSelector(state => state.searchDish);
   const dispatch = useDispatch();

   const selectFilteredAllDishes = () => {          //сразу здесь фильтруем
      return selectAllDishes.filter((recipe) =>
        recipe.name.toLowerCase().includes(selectSearchDish.toLowerCase())
      );
   };

   const allDishes = useSelector(selectFilteredAllDishes);  //то что получили в фильтре получаем через селектор

   const onFirstRender = () => {
      dispatch(loadData());
   };
   useEffect(onFirstRender, []);

   const onAddDishesHandler = (dish) => {
      dispatch(addDishes(dish));
   };

   const Menu = allDishes.map((dish) => (
      <div key={dish.id} className="dish" tabIndex={0}>
         <span className="dish__container">
            <h3 className="dish__name">{dish.name}</h3>
            <div className="image__container">
               <img src={dish.img} alt="" className="dish-image" />
            </div>
         </span>
         <FavoriteButton 
            dish={dish} 
            text={'В любимое'} 
            src={heart} 
            onClickHandler={onAddDishesHandler}
         />
      </div>
   ));

   return (
      <>
         <h4 className="dishes__header">Наше меню</h4>
         <div className="dishes__container">
            {Menu}
         </div>
      </>     
   );
};

export default DishesMenu;