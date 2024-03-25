import { Component } from "react";
import './Footer.css'
class Footer extends Component{
    render(){
        return(
            <div className="container-fluid style">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className=" text-center" >
                                <h1 style={{fontFamily:"cinematic",fontSize:"70px"}} className="text-white">Match your Mood & <span style={{color:"red"}}>Chill !</span></h1>
                            </div>
                            <div className="text-center">
                               <h3 style={{fontFamily:"cinematic",fontSize:"50px"}} className="text-white py-3"><span style={{color:"red"}}>Social</span> Media</h3>
                               <div className="row mx-auto">
                                    <div className="col-md-3">
                                        <a href="https://www.linkedin.com/in/mouhanned-jawadi-etudiant-genie-informatique/">
                                            <img 
                                            src="/images/linkedin.png"
                                            width="60rem"
                                            alt=""
                                            />
                                        </a>
                                        
                                    </div>
                                    <div className="col-md-3 ">
                                        <a href="https://www.instagram.com/mouhanned_jaouedi/?hl=fr">
                                            <img 
                                                src="/images/instagram.png"
                                                width="60rem"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="col-md-3 ">
                                        <a href="https://www.facebook.com/profile.php?id=100083750044161">
                                            <img 
                                                src="/images/facebook.png"
                                                width="60rem"
                                                alt=""
                                            />
                                        </a>

                                    </div>
                                    <div className="col-md-3 ">
                                        <a href="https://www.youtube.com/watch?v=XXYlFuWEuKI&list=RD02xmR4rS3UE&index=9">
                                            <img 
                                                src="/images/youtube.png"
                                                width="60rem"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                               </div>
                               <br/>
                               <p className="  text-white text-center py-3" >&copy; 2024 All Rights Reserved. </p> 
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row mx-auto">
                                
                                <img 
                                    src="/images/logo.png"
                                    width="400px"
                                    alt=""
                                />
                            </div>
                        </div>

                    </div>
                </div>
                         
            </div>
 
        );
    }
}

export default Footer