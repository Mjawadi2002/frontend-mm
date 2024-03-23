import { Component } from "react";
import './Developer.css'

class Developer extends Component{
    render(){
        return(
            
            <div className="custom-card ">
            <img 
                src="/images/moh.jpg" 
                className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Jawadi Mouhanned</h5>
              <p className="card-text">Responsible of frontend design and developement.</p>
              
            </div>
          </div>
        );
    }
}

export default Developer;