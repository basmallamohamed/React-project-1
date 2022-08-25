import {Component} from "react"; 
class Aboutus extends Component {

  render(){
    
    return <>
      
        <div className="ww">
         <div className="work">
            <h4> How we work</h4>
            <h1> How We Rock & Roll</h1>
         </div>
        </div>

        <div className="steps">
        
            <div className="pic"></div>
            <div className="step1">
                <h4> The idea </h4>
                <h2> Generating Idea And "The Plan"</h2>
                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>
            </div>
        
        </div>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <hr className="hr"></hr>
        <div className="ss">
        <div className="pic2"></div>
        
                    <div className= "step2">
                       <h4> Mock up </h4>
                       <h2> Creating the concept </h2>
                       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra tempor rhoncus. Integer iaculis augue metus, eget luctus ex tristique sed. Suspendisse egestas lacinia magna et rutrum. Nunc vel est vel augue mollis gravida. Aenean hendrerit felis a suscipit accumsan. Pellentesque mi metus, condimentum quis maximus eu, ornare dapibus elit.</p>
                       <button> More Details </button>
                   </div>
        </div>
    
       <div className="cards1">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 pic3"></div>
                <div class=" col-lg-3 col-md-3 col-sm-12 card">
  
                   <div class="card-body">
                       <i class="fa-solid fa-chart-simple ic"></i>
                       <h5 class="card-title">Final step one</h5>
                       <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet est et congue aliquet.</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 card">
                   <div class="card-body">
                     <i class="fa-solid fa-gift ic"></i>
                     <h5 class="card-title">final step one</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet est et congue aliquet.</p>
                   </div>
                </div>
            </div>
        </div>
       </div>



    </>

}
}



export default Aboutus;
