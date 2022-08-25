import {Component} from "react"; 
class Swiper extends Component {

  render(){
    
    return <>
        
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <div className="carousel-caption d-none d-md-block">
        <div className="sm"></div>
        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
        <h5>Bershtain Saal</h5>
        
      </div>
    </div>
    <div className="carousel-item">
      
      <div className="carousel-caption d-none d-md-block">
        <div className="sn"></div>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
        <h5>Aria Bazooka</h5>
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          
    
    
    </>

}
}



export default Swiper;
