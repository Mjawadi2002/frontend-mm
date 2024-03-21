import { Component } from "react";
import "../components/Service.css"


class Service extends Component{
    render(){
        return(
            <div className="card card-style" style={{width:"20rem"}}>
                <img 
                src="https://i.pinimg.com/564x/6e/55/e3/6e55e3f32df259ccd7a45a3c00111293.jpg" 
                className="card-img-top" 
                />
            <div className="card-body">
                <h5 className="card-title text-white" >Sentiment Movie Generator</h5>
                <p className="card-text text-white">This Service will analyse your mood and suggest you some movies to chill and have some fun.</p>
                <a href="#" className="btn btn-secondary ">Try Service</a>
             </div>
            </div>
        );
    }
}

export default Service;