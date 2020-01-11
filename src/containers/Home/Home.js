import React, { Component } from "react";
import Poster from "../../components/Poster/Poster";
import classes from "./Home.css";
import Auxiliary from "../../hoc/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Modal from "../../components/UI/Model/Model";
import Films from "../../components/Films/Films";
import LOGIN from "../Auth/LogIn";
import axios from "../../axios-orders";
import imagesArray from "../../assets/images";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
library.add(fab, faSearch);
class Home extends Component {
  state = {
    filmsList: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    showSearchBar: false,
    showLogInForm: false,
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
    selectedFilm: false
  };
  componentDidMount() {
    this.props.onFetchFilms();
    // axios
    //   .post("./films.json", this.state.films[0])
    //   .then(res => console.log(res));
  }
  handleRightShift = () => {
    if (this.props.counter < this.props.films.length - 1) {
      this.props.onChoseFilm(this.props.counter + 1);
    }
  };
  handleLeftShift = () => {
    if (this.props.counter > 0) {
      this.props.onChoseFilm(this.props.counter - 1);
    }
  };
  render() {
    let searchBar = (
      <div className={classes.Input}>
        <input
          className={classes.InputElement}
          style={{
            height: "40px",
            width: "100%",
            zIndex: 1000,
            float: "right"
          }}
          placeholder="SEARCH"
        />
      </div>
    );
    let logInForm = <LOGIN />;
    let gridContainer = null;
    let films = null;
    if (this.props.films.length) {
      if (this.state.selectedFilm) {
        films = (
          <Films
            films={this.props.films}
            rightShift={this.handleRightShift}
            leftShift={this.handleLeftShift}
            counter={this.props.counter}
          />
        );
      }
      gridContainer = (
        <div className={classes.gridContainer}>
          {this.state.filmsList.map(film => (
            <div key={film.id} className={classes.gridItem}>
              <Poster
                clicked={() => {
                  this.setState({ selectedFilm: true });
                  this.props.onChoseFilm(film.id);
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
        <div className={classes.main}>
          <div
            style={{
              height: "50px",
              overflow: "visible",
              boxShadow: "0 2px 4px 0",
              width: "100%"
            }}
          >
            <ul className={classes.navbar}>
              <li onClick={() => this.setState({ showSearchBar: true })}>
                <a>
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li onClick={() => this.setState({ showLogInForm: true })}>
                <a href="#login">LOGIN</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
            <Modal
              show={this.state.showSearchBar}
              clicked={() => this.setState({ showSearchBar: false })}
            >
              {searchBar}
            </Modal>
            <Modal
              show={this.state.showLogInForm}
              clicked={() => this.setState({ showLogInForm: false })}
            >
              {logInForm}
            </Modal>
          </div>
        </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
