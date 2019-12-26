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
      //     "http://photo.elcinema.com.s3.amazonaws.com/uploads/_480x640_ea3e8af4ee343ec8a7a9d9a81889eed8a9bbdacef735cd1b41b80f3aa4899922.jpg",
      //   name: "Jumanji: The Next Level",
      //   rating: 8,
      //   type: "Adventure, Action, Comedy, Fantasy ",
      //   duration: " 114 mins",
      //   actors: ["Dwayne Johnson", "Karen Gillan", "Jack Black", "Kevin Hart"],
      //   description:
      //     "Spencer secretly kept the pieces of the Jumanji game and, despite the previous adventure, he decides to repair its system in his grandfather's basement. His friends, Bethany, Fridge, and Martha re-enter Jumanji to rescue him, to find that Spencer’s grandfather and his friend got drawn in too. From arid deserts to snowy mountains, the players must play to escape the world’s most dangerous game.",
      //   prices: [{ time: "00:45", price: "100.0 EGP" }]
      // }
    ],
    counter: 0,
    selectedFilm: false
  };
  componentDidMount() {
    this.props.onFetchFilms();
  }
  handleRightShift = () => {
    if (this.state.counter < this.props.films.length - 1) {
      this.setState({ counter: this.state.counter + 1 });
    }
  };
  handleLeftShift = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
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
            counter={this.state.counter}
          />
        );
      }
      gridContainer = (
        <div className={classes.gridContainer}>
          {this.state.filmsList.map(film => (
            <div key={film.id} className={classes.gridItem}>
              <Poster
                clicked={() =>
                  this.setState({ counter: film.id, selectedFilm: true })
                }
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
              height: "60px"
              // overflow: "hidden",
            }}
          >
            <div className={classes.social}>
              <FontAwesomeIcon
                className={`${classes.FontAwesomeIcon} ${classes.facebook}`}
                icon={["fab", "facebook-f"]}
              />
              <FontAwesomeIcon
                className={`${classes.FontAwesomeIcon} ${classes.twitter}`}
                icon={["fab", "twitter"]}
              />
              <FontAwesomeIcon
                className={`${classes.FontAwesomeIcon} ${classes.instgram}`}
                icon={["fab", "instagram"]}
              />
              <FontAwesomeIcon
                icon={["fab", "youtube"]}
                className={`${classes.FontAwesomeIcon} ${classes.youtube}`}
              />
            </div>
          </div>
          <div
            style={{
              height: "50px",
              overflow: "visible",
              boxShadow: "0 2px 4px 0"
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

        <div style={{ backgroundColor: "#383838", paddingTop: "20px" }}>
          {films}
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
    }
  };
};
const mapStateToProps = state => {
  return {
    films: state.films.films,
    loading: state.films.loading
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
