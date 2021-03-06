import DishesMenu from '../dishesMenu/DishesMenu';
import FavoriteDishes from '../favoriteDishes/FavoriteDishes';
import SearchDishes from '../searchDishes/SearchDishes';



const MainPage = () => {
   return (
      <>
         <h1>Выберите понравившиеся блюда</h1>
            <SearchDishes/>
         <div className='container'>
            <FavoriteDishes/>
            <DishesMenu/>
         </div>    
      </>
   );
};

export default MainPage;