import { Component } from "react";
import './About.css'
import Developer from "./Developer";
class About extends Component{
    render(){
        return(
            <div className="py-5">
                <h1 className="text-white text-center display-1 py-2" style={{ fontFamily: "cinematic" }}> What is Movie <span style={{ color: "red" }}>Matcher</span></h1>
                   
                    <div className="container-fluid card" style={{width:"60%"}}>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY" allowFullScreen ></iframe>
                        </div>
                    </div>

                    <h1 className="text-white text-center display-1 py-1" style={{ fontFamily: "cinematic",  marginTop:"2%"}}> Dev <span style={{ color: "red" }}>Team</span></h1>
                   
                    <div className="row mx-auto ">
                        <div className="col-md-4 ">
                            <Developer 
                                image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/400995447_314736324661367_5765779282205814559_n.jpg?nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7JsiI3JKKkoAX-3Ec-&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBZCOoKo9lgW1V5k_gMxcdazf16xGmRnDv_07Zca9O87w&oe=66032D64"
                                name="Jawadi Mouhanned"
                                description="Responsible for frontend developement"
                            
                            />
                        </div>
                        <div className="col-md-4">
                            <Developer 
                                image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/400995447_314736324661367_5765779282205814559_n.jpg?nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7JsiI3JKKkoAX-3Ec-&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBZCOoKo9lgW1V5k_gMxcdazf16xGmRnDv_07Zca9O87w&oe=66032D64"
                                name="Soussia Sarra"
                                description="Responsible for backend developement"
                            />
                        </div>
                        <div className="col-md-4 ">
                            <Developer 
                                image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/400995447_314736324661367_5765779282205814559_n.jpg?nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7JsiI3JKKkoAX-3Ec-&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBZCOoKo9lgW1V5k_gMxcdazf16xGmRnDv_07Zca9O87w&oe=66032D64"
                                name="Bhiri Ghoul Ala"
                                description="Responsible for ai developement"
                            />
                        </div>
                    </div>

            </div>
        );
    }
}

export default About;