import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="py-5">
                <div className="container-fluid card" style={{width:"70%"}}>
                    <h1 className="text-white text-center display-1 py-1" style={{ fontFamily: "cinematic" }}> For <span style={{color:"red"}}> Contact</span></h1>
                    <div className="row">
                        <div className="col-md-4 mx-auto" >
                            <img
                                src="/images/Untitled_design__30_-removebg-preview.png"
                                width="300px"
                                height="290px"
                                alt="Contact"
                            />
                        </div>
                        <div className="col-md-8 mx-auto">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control text-dark" id="exampleInputPassword1"  placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Email address" />
                                </div>
                                <div className="mb-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Problem description"></textarea>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-danger w-100 text-dark">Send</button>
                                    <br />
                                    
                                
                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          
        );
    }
}

export default Contact;
