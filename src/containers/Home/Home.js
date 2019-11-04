import React, { Component } from "react";
import Poster from "../../components/Poster/Poster";
import classes from "./Home.css";
import Auxiliary from "../../hoc/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Modal from "../../components/UI/Model/Model";
library.add(fab, faSearch);
class Home extends Component {
  state = {
    filmsList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    showSearchBar: false
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
    if (!this.state.showSearchBar) {
      searchBar = null;
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
                <a class="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#news">LOGIN</a>
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
          </div>
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
