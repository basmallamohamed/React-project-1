import {Component} from "react"; 
class Slider extends Component {

  render(){
    
    return <>
         
         <div id="carouselExampleSlidesOnly" className="carousel slide sl" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active sli">
                 <i className="fa-brands fa-sass bs"></i>
                 <i className="fa-brands fa-html5 ht"></i>
                <i className="fa-brands fa-react ht"></i>
                <i className="fa-brands fa-node-js ht"></i>
                </div>
              <div className="carousel-item sli">
              <i className="fa-brands fa-python bs"></i>
              <i className="fa-brands fa-java ht"></i>
              <i className="fa-brands fa-css3 ht"></i>
              <i className="fa-brands fa-bootstrap ht"></i>
              </div>
             </div>
         </div>
      
    
    
    </>

}
}



export default Slider;