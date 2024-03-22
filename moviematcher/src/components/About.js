import { Component } from "react";
import './About.css'
import Developer from "./Developer";
class About extends Component{
    render(){
        return(
            <div className="py-5">
                <h1 className="text-white text-center display-1 py-2" style={{ fontFamily: "cinematic" }}> What is Movie <span style={{ color: "red" }}>Matcher</span></h1>
                <div className="container-fluid card">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY" allowfullscreen ></iframe>
                    </div>
                </div>
                <h1 className="text-white text-center display-1 py-1" style={{ fontFamily: "cinematic" }}> Dev <span style={{ color: "red" }}>Team</span></h1>
                <div className="row mx-auto">
                    <div className="col-md-4 ">
                        <Developer />
                    </div>
                    <div className="col-md-4">
                        <Developer />
                    </div>
                    <div className="col-md-4 ">
                        <Developer />
                    </div>
                </div>

            </div>
        );
    }
}

export default About;