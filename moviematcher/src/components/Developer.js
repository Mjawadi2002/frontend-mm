import { Component } from "react";
import './Developer.css'

class Developer extends Component{
    render(){
        return(
            
            <div className="custom-card ">
            <img 
                src={this.props.image} 
                class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">{this.props.name}</h5>
              <p class="card-text">{this.props.description}</p>
              
            </div>
          </div>
        );
    }
}

export default Developer;