import { NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink 
                     style={({isActive}) => ({color: isActive ? "#fff" : "#D6D6D6"})}
                     to="/"
                  >
                     Главная
                  </NavLink>
               </li>
               <li>
                  <NavLink 
                     style={({isActive}) => ({color: isActive ? "#fff" : "#D6D6D6"})}
                     to="/about"
                  >
                     О проекте
                  </NavLink>
               </li>
            </ul>
         </nav>         
      </header>
   )
}

export default Header;