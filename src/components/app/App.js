import DishesMenu from '../dishesMenu/DishesMenu';
import FavoriteDishes from '../favoriteDishes/FavoriteDishes';
import SearchDishes from '../searchDishes/SearchDishes';

import './app.scss';

function App() {
  return (
    <div className="app">
      <h1>Выберите понравившиеся блюда</h1>
      <SearchDishes/>
      <div className='container'>
        <FavoriteDishes/>
        <DishesMenu/>
      </div>    
    </div>
  );
}

export default App;
