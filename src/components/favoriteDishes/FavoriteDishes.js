import { useSelector, useDispatch } from "react-redux";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import {removeDishes} from '../../actions/actions';

import brokenHeart from '../../assets/broken-heart.gif';
import './favoriteDishes.scss';

const FavoriteDishes = () => {
   const FavDishes = useSelector(state => state.favoriteDishes);
   console.log(FavDishes);
   const dispatch = useDispatch();

   const onDeleteDishesHandler = (dish) => {
      dispatch(removeDishes(dish));
   };

   const Favorite = FavDishes.map((dish) => (
      <div key={dish.id} className="dish" tabIndex={0}>
         <span className="dish__container">
            <h3 className="dish__name">{dish.name}</h3>
            <div className="image__container">
               <img src={dish.img} alt="" className="dish-image" />
            </div>
         </span>
         <FavoriteButton 
            dish={dish} 
            text={'Удалить из любимого'} 
            src={brokenHeart} 
            onClickHandler={onDeleteDishesHandler}
         />
      </div>
   ));

   return (
      <>
         <h4 className="favorite__header">Понравившиеся:</h4>
         <div className="dishes__container favorite__container">            
            {Favorite}
         </div>
      </>     
   );
};

export default FavoriteDishes;