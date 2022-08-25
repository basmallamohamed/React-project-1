import {Component} from "react"; 
class Info extends Component {

  render(){
    
    return <>
           <div className="info">
            <div className="basic">
                <h2 > ABOUT </h2>
                <p className="rr"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus elit aliquam facilisis pharetra. Aenean consectetur lacinia diam a tincidunt.</p>
                <h2> BASIC INFO </h2>
                <hr></hr>
                <p className="mm"> <span className="ph"> PHONE </span> 429 078 237 </p>
                <hr></hr>
                <p className="mm"> <span className="ph">ADDRESS</span> STREET NAME 55, CITY</p>
                <hr></hr>
                <p className="mm"> <span className="ph"> EMAIL </span> BRANDNAME@BRAND.COM </p>
                <hr></hr>
            </div>
            <div className="ge">
            <div className="message">
                <h2> SEND US A MESSAGE </h2>
                <p> Nulla venenatis id arcu at scelerisque. Praesent lorem quam, molestie gravida lectus sit amet, venenatis eleifend turpis. Sed aliquam lacus nulla, ut rutrum metus dignissim ut.</p>
                <div className="ame">
                <h5 className="em"> Name </h5>
                <i className="fa-solid fa-circle-check o"></i><br/>
                <input className="in" type="text"/>
                </div>
                <div className="ail">
                <h5 className="em"> Email</h5>
                <i className="fa-solid fa-circle-check o"></i><br/>
                <input className="in" type="text"/>
                </div>
                <div className="mess">
                    <h5> Message </h5>
                    <i className="fa-solid fa-circle-check qa"></i><br/>
                    <input type="text"/>
                </div>
                <button className="ui"> send a message</button>
            </div>
            </div>
            </div>
           


</>

}
}



export default Info;