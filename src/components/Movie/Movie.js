import React, { Component } from "react";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import { API_URL, API_KEY } from "../../config";
import Navigation from "../elements/Navigation/Navigation";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";

export class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });

    // first fetch the movie
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}`;
    this.getItems(endpoint);
  }

  getItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log("Od Movie komponentata", result);
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: result }, () => {
            // ...then fetch actors in the setState callBack function
            const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
            fetch(endpoint)
              .then(res => res.json())
              .then(res => {
                console.log("actors", res);
                const director = res.crew.filter(
                  member => member.job === "Director"
                );
                this.setState({
                  actors: res.cast,
                  directors: director,
                  loading: false
                });
              });
          });
        }
      })
      .catch(err => console.error("Error: ", err));
  };

  render() {
    return (
      <div className="rmdb-movie">
        {this.state.movie ? (
          <div>
            <Navigation movie={this.props.location.movieName} />
            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
            />
            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            />
          </div>
        ) : null}
        {this.state.actors ? (
          <div className="rmdb-movie-grid">
            <FourColGrid header={"Actors"}>
              
              {this.state.actors.map((element, i) => {
                return <Actor key={i} actor={element} />;
              })}
            </FourColGrid>
          </div>
        ) : null}
        {!this.state.actors && !this.state.loading ? <h1>No Movie Found!</h1> : null}
        {this.state.loading ? <Spinner /> : null}
        }
      </div>
    );
  }
}

export default Movie;
