import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
    render() {
        return (
            <div className="py-5">
                            <div className="container-fluid card py-3">
                <h1 className="text-white text-center display-1 py-1" style={{ fontFamily: "cinematic" }}>
                    Create <span style={{ color: "red" }}>Account</span>
                </h1>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="nameInput" placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="surnameInput" placeholder="Surname" />
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="ageInput" placeholder="Age" />
                            </div>
                            <div className="mb-3">
                                <input type="file" className="form-control" id="pictureInput"  />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="emailInput" placeholder="Email address" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                            </div>
                            <div className="text-center">
                                <Link to="/login" className="btn btn-danger w-100 text-white" style={{ textDecoration: "none" }}>Create account</Link>
                            </div>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Signup;
