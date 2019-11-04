import React, { Component } from "react";
import Poster from "../../components/Poster/Poster";
import classes from "./Home.css";
import Auxiliary from "../../hoc/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);
class Home extends Component {
  state = {
    filmsList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  };
  render() {
    return (
      <Auxiliary>
        <div className={classes.main}>
          <div
            style={{
              height: "60px"
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

          <ul className={classes.navbar}>
            <li>
              <a class="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div style={{ backgroundColor: "#383838" }}>
          <div className={`${classes.Limits} ${classes.row} `}>
            <div className={classes.gridContainer}>
              {this.state.filmsList.map(film => (
                <div key={film.id} className={classes.gridItem}>
                  <Poster />
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
