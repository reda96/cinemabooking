import React, { Component } from "react";
import Poster from "../../components/Poster/Poster";
import classes from "./Home.css";
class Home extends Component {
  state = {
    filmsList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  };
  render() {
    return (
      <div className={`${classes.Limits} ${classes.row} `}>
        <div className={classes.gridContainer}>
          {this.state.filmsList.map(film => (
            <div key={film.id} className={classes.gridItem}>
              <Poster />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
