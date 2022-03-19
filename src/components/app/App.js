import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutPage from "../aboutPage/AboutPage";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import Page404 from "../Page404/Page404";

import './app.scss';

function App() {
  return (
    <Router>    
      <div className='wrapper'>
        <Header/>
        <div className='app'>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path="*" element={<Page404/>}/> 
          </Routes>          
        </div>       
        <Footer/>
      </div>     
    </Router>    
  );
}

export default App;
