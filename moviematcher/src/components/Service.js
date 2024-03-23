import { Component } from "react";
import "../components/Service.css"


class Service extends Component{
    render(){
        return(
            <div className="card card-style" style={{width:"20rem"}}>
                <img 
                src={this.props.img}
                className="card-img-top" 
                />
                <div className="card-body">
                    <h5 className="card-title text-white">{this.props.title}</h5>
                    <p className="card-text text-white">{this.props.description}</p>
                    <a href="#" className="btn btn-secondary ">{this.props.buttonText}</a>
                </div>
            </div>
        );
    }
}

export default Service;