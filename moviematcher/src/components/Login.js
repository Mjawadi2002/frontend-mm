import { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component{
    render(){
        return(
           <div className="py-5">
                 <div className="container-fluid card py-3">
                <h1 className="text-white text-center display-1 py-1" style={{ fontFamily: "cinematic" }}> Welcome <span style={{color:"red"}}> Back</span> </h1>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <form>
                          
                            <div className="mb-3">
                                <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Email address"  />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Password" />
                            </div>
                            
                            <div className="text-center">
                                <button type="submit" className="btn btn-danger w-100 text-dark"><Link className=" text-white" style={{textDecoration:"none"}} to="/">Log in</Link></button>
                            </div>
                            <p className="text-dark"> Don't have an account ?</p>
                            <div className="text-center">
                            <button type="submit" className="btn btn-danger w-100 text-dark"><Link className=" text-white" style={{textDecoration:"none"}}  to="/signup">Create acount</Link></button>
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

 export default Login;