import './favoriteButton.scss';

const FavoriteButton = ({text, src, dish, onClickHandler, style}) => {

   
   
   return (
      <button className="favorite__button" style={style} onClick={()=>onClickHandler(dish)}>
         <img className="heart-icon" alt="" src={src} />
         {text}
      </button>
   );
};

export default FavoriteButton;