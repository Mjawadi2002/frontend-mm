import { Component } from "react";
import Services from './Services'
import Slider from "./Slider";
class Home extends Component{
    render(){
        return(
            <div className="container-fluid py-5">
                <h1 className=" text-white text-center display-1 py-3" style={{fontFamily: "cinematic"}}> Check <span style={{color:"red"}}> Features !</span> </h1>
                <Slider />
                <h1 className=" text-white text-center display-1 py-3" style={{fontFamily: "cinematic"}}> Our <span style={{color:"red"}}> Services</span></h1>
                <Services />
                <br/>
            </div>
            
           
        );
    }
}

export default Home;