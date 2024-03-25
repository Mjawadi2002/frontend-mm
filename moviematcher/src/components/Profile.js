import React, { Component } from "react";
import MovieCard from "./MovieCard";
import movies from "./fakemovies";
import "./Profile.css";


class Profile extends Component {
    constructor(){
        super();
        this.state={
            movies
        }
        this.mapping=this.mapping.bind(this);
    }
    
    mapping(x) {
        const movies = x.map(movie => (
            <div className="col-4" key={movie.id} >
              <MovieCard img={movie.img} title={movie.title} rate={movie.rate} genre={movie.genre} />
            </div>
        ));
        return movies;
    }
    
    
    render() {
        const movielist = this.mapping(this.state.movies);
        return (
            <div  style={{ background: "linear-gradient(to top, rgb(4, 4, 4), rgba(11, 11, 11, 0.937))" }} className="container-fluid py-5 position-relative">
                <img alt="" className="coverimg" src="images/coverimg.png" />
                <div className="profile-text">
                    <p className="text-white text-center display-1 py-3" style={{ fontFamily: "cinematic", fontSize: "400%"}}>
                        <span style={{color:"rgb(97, 75, 49)"}}> Welcome to your profile</span> <span style={{ color: "rgb(195, 58, 58)" }}> markita</span>
                    </p>
                </div>
                
                <div className="profcontainer">
                  <img alt=""  className="profilpic" src="images/profilpic2.png" ></img>
                </div>

                <div className="secondcontainer row">
                    {movielist}
                </div>

            </div>
        );
    }
}

export default Profile;
