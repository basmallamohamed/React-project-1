import './App.css';
import {Component} from "react"; 
import Navbar from './component/Navbar';
import Home from './component/Home';
import Aboutus from './component/Aboutus';
import Swiper from './component/Swiper';
import Options from './component/Options';
import Cards from './component/Cards';
import Slider from './component/Slider';
import Perks from './component/Perks';
import Info from './component/Info';
import Icons from './component/Icons';
import Footer from './component/Footer';

class App extends Component {

  render(){
    return <>
          <Navbar/>
          <Home/>
          <Aboutus/>
          <Swiper/>
          <Options/>
          <Cards/>
          <Slider/>
          <Perks/>
          <Info/>
          <Icons/>
          <Footer/>
      </>
  }
}



export default App;
