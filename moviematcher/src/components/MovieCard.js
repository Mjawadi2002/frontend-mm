import React ,{Component} from 'react';
import { FaStar } from "react-icons/fa";
import "./MovieCard.css"

class MovieCard extends Component{
    
    render(){
        return(
            <div className="card">
                <div className="card-header" >
                <img className='img' alt="" src={this.props.img}/>
                </div>
                <div className="card-body">
                    <p><span style={{color:"white" , fontWeight:"700",paddingRight:"21px"}} >Titre:</span><span style={{color:"white" , fontWeight:"700"}}>{this.props.title}</span><br></br>
                    <span style={{color:"gray",fontWeight:"500",paddingRight:"15px"}} >Genre:</span><span style={{color:"gray",fontWeight:"500",}}>{this.props.genre}</span><br></br>
                    <span style={{color:"white",listStyleType:"none",paddingRight:"29px"}}>Rate:</span><span style={{color:"white",listStyleType:"none"}}>{this.props.rate}<FaStar style={{ color: "#ede607"}}/> </span></p>
                    
                </div>
            </div>
        )
    }
}
export default MovieCard;