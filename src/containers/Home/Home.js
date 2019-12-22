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
library.add(fab, faSearch);
class Home extends Component {
  state = {
    filmsList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    showSearchBar: false,
    showLogInForm: false,
    films: [
      {
        img: "http://photo.elcinema.com.s3.amazonaws.com/uplo...",
        name: "Terminator: Dark Fate",
        rating: 7,
        type: "Science Fiction, Adventure, Action",
        duration: "134 min",
        actors: [
          "Arnold Schwarzenegger",
          "Linda Hamilton",
          "Mackenzie Davis",
          "Brett Azar"
        ],
        description:
          "In this direct sequel to Terminator 2: Judgment Day, and two decades after its last events, Sarah Connor’s mission is to protect a young woman called Dani Ramos and her friends from the deadly plan of a liquid metal terminator who has arrived from the future by Skynet especially for them. Sarah also recruits the original Terminator to come to their aid for a fight for the future.",
        prices: [{ time: "00:45", price: "180.0 EGP" }]
      },
      {
        img: "http://photo.elcinema.com.s3.amazonaws.com/uplo...",
        name: "Terminator: Dark Fate",
        rating: 7,
        type: "Science Fiction, Adventure, Action",
        duration: "135 min",
        actors: [
          "Arnold Schwarzenegger",
          "Linda Hamilton",
          "Mackenzie Davis",
          "Brett Azar"
        ],
        description:
          "In this direct sequel to Terminator 2: Judgment Day, and two decades after its last events, Sarah Connor’s mission is to protect a young woman called Dani Ramos and her friends from the deadly plan of a liquid metal terminator who has arrived from the future by Skynet especially for them. Sarah also recruits the original Terminator to come to their aid for a fight for the future.",
        prices: [{ time: "00:45", price: "180.0 EGP" }]
      }
    ]
    // selectedFilm
  };
  componentDidMount() {
    axios.get("/films.json").then(res => {
      const films = [];
      for (let key in res.data) {
        films.push({ ...res.data[key], id: key });
      }
      this.setState({ films: films });
    });

    // axios.post("/films.json", this.state.film).then(resp => {
    //   console.log(resp);
    // });
  }
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
                className={`${classes.FontAwesomeIcon} ${classes.youtube}`}
                icon={["fab", "youtube"]}
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
          <Films films={this.state.films} />;
          <div className={`${classes.Limits} ${classes.row} `}>
            <div className={classes.gridContainer}>
              {this.state.filmsList.map(film => (
                <div key={film.id} className={classes.gridItem}>
                  <Poster width="300px" height="450px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Auxiliary>
    );
  }
}

export default Home;
