import { Component } from "react";
import Service from './Service'

class Services extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col md-6">
                        <p className="text-white text-center py-5">
                            <br />
                            <br />
                            Movie Matcher provides users with the opportunity to generate personalized movie recommendations through two distinct methods. Firstly, it analyzes the user's mood, utilizing advanced algorithms to interpret emotions and suggest films that align with their current emotional state. Whether you're feeling upbeat, contemplative, or in need of a good laugh, Movie Matcher tailors its suggestions to suit your mood perfectly. Additionally, for those who prefer a more straightforward approach, Movie Matcher offers category-based recommendations. Users can easily navigate through genres, themes, and preferences to discover movies that cater to their specific tastes and interests. Whether you're seeking an adrenaline-pumping action flick, a heartwarming romance, or a spine-tingling thriller, Movie Matcher ensures that you'll find the perfect cinematic experience for any occasion.
                        </p>
                    </div>

                    <div className="col md-6">
                        <div className="row">
                            <div className="col">
                                <Service
                                    img="https://github.com/kishan0725/AJAX-Movie-Recommendation-System-with-Sentiment-Analysis/blob/master/static/image.jpg?raw=true"
                                    title="Movie recommendations"
                                    description="This Service will provide you only movies due to categeory selection , no need for authentification."
                                    buttonText="Try Service"
                                />
                            </div>
                            <div className="col">
                                <Service
                                    img="https://i.pinimg.com/564x/2d/d4/24/2dd4243ddcf48e4144eb7f115d986a0d.jpg"
                                    title="Sentiment Movie Generator"
                                    description="This Service will analyze your mood and suggest you some movies to chill , authentification needed."
                                    buttonText="Try Service"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
