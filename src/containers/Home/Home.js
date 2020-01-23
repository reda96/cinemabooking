import React, { Component } from "react";
import Poster from "../../components/Poster/Poster";
import classes from "./Home.css";
import Auxiliary from "../../hoc/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import Films from "../../components/Films/Films";

import axios from "../../axios-orders";
import imagesArray from "../../assets/images";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
library.add(fab, faSearch);
class Home extends Component {
  state = {
    filmsList: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],

    films: [
      // {
      //   img:
      //     "http://photo.elcinema.com.s3.amazonaws.com/uploads/_480x640_3ed33b54d3456d4b261b2be063fd098284b97a140b7f051d75ac4ad443f99bc5.jpg",
      //   name: "1917",
      //   rating: 5,
      //   type: "Drama, War",
      //   duration: "119 mins",
      //   actors: [
      //     "Dean-Charles Chapman",
      //     "George MacKay",
      //     "Benedict Cumberbatch",
      //     "Andrew Scott"
      //   ],
      //   description:
      //     "During World War I, two British soldiers go on an impossible mission, where they must enter the enemy territory, to deliver a message to prevent their beleaguered troops from marching towards a deadly trap.",
      //   prices: [{ time: "00:45", price: "100.0 EGP" }]
      // }
    ],
    counter: 0,
    selectedFilm: false,
    filmOpacity: false
  };
  componentDidMount() {
    this.props.onFetchFilms();
    // axios
    //   .post("./films.json", this.state.films[0])
    //   .then(res => console.log(res));
  }
  handleRightShift = () => {
    if (this.props.counter < this.props.films.length - 1) {
      this.setState({ filmOpacity: false });
      setTimeout(() => {
        this.setState({ filmOpacity: true });
        this.props.onChoseFilm(this.props.counter + 1);
      }, 200);
    }
  };
  handleLeftShift = () => {
    if (this.props.counter > 0) {
      this.setState({ filmOpacity: false });
      setTimeout(() => {
        this.setState({ filmOpacity: true });
        this.props.onChoseFilm(this.props.counter - 1);
      }, 200);
    }
  };
  render() {
    let gridContainer = null;
    let films = null;

    if (this.props.films.length) {
      if (this.state.selectedFilm) {
        films = (
          <div
            style={{
              animation: this.state.filmOpacity
                ? classes.smooth + " 1s ease-in"
                : classes.smoothout + " 0.5s ease-out"
            }}
          >
            <Films
              films={this.props.films}
              rightShift={this.handleRightShift}
              leftShift={this.handleLeftShift}
              counter={this.props.counter}
            />
          </div>
        );
      }
      gridContainer = (
        <div className={classes.gridContainer}>
          {this.state.filmsList.map(film => (
            <div key={film.id} className={classes.gridItem}>
              <Poster
                clicked={() => {
                  if (this.state.selectedFilm) {
                    this.setState({ filmOpacity: false });
                    setTimeout(() => {
                      this.setState({ filmOpacity: true });
                      this.props.onChoseFilm(film.id);
                    }, 200);
                  } else {
                    this.setState({ selectedFilm: true, filmOpacity: true });
                    this.props.onChoseFilm(film.id);
                  }
                }}
                imgUrl={imagesArray[film.id]}
                width="300px"
                height="450px"
              />
            </div>
          ))}
        </div>
      );
    }
    return (
      <Auxiliary>
        <div
          style={{
            backgroundColor: "#383838",
            width: "100%",
            height: "auto"
          }}
        >
          <div
            style={{
              margin: "0 auto",
              paddingTop: "30px"
            }}
            className={classes.films}
          >
            {films}
          </div>
          <div className={`${classes.Limits} ${classes.row} `}>
            {gridContainer}
          </div>
        </div>
      </Auxiliary>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchFilms: () => {
      dispatch(actions.fetchFilms());
    },
    onChoseFilm: counter => {
      dispatch(actions.chooseFilm(counter));
    }
  };
};
const mapStateToProps = state => {
  return {
    films: state.films.films,
    loading: state.films.loading,
    counter: state.films.chosenFilm
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
