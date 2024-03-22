import { Component } from "react";
import './Developer.css'

class Developer extends Component{
    render(){
        return(
            
            <div class="custom-card ">
            <img 
                src="/images/moh.jpg" 
                class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Jawadi Mouhanned</h5>
              <p class="card-text">Responsible of frontend design and developement.</p>
              
            </div>
          </div>
        );
    }
}

export default Developer;