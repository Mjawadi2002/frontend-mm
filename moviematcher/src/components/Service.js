import { Component } from "react";
import "./Service.css"


class Service extends Component{
    render(){
        return(
            <div className="card card-style">
                <img 
                src={this.props.img}
                className="card-img-top" 
                alt="specific card info"
                />
                <div className="card-body row" style={{height:"100%"}}>
                    <h5 className="card-title text-white">{this.props.title}</h5>
                    <p className="card-text text-white">{this.props.description}</p>
                    <a href="https://example.com" className="btn btn-secondary">{this.props.buttonText}</a>

                </div>
            </div>
        );
    }
}

export default Service;