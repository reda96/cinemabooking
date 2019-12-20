import React, { Component } from "react";
import classes from "./Films.css";
import Poster from "../Poster/Poster";
import Auxiliary from "././../../hoc/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";
import {
  faChevronRight,
  faChevronLeft,
  faPlay,
  faPlus,
  faMoneyBill
} from "@fortawesome/free-solid-svg-icons";
class Films extends Component {
  state = {
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
      }
    ]
  };
  render() {
    return (
      <Auxiliary>
        <div className={classes.gridContainer}>
          <div className={classes.gridItem}>
            <Poster width="350px" height="505px" />
          </div>

          <div className={classes.gridItem}>
            <div
              className={classes.devSplit}
              style={{ width: "50px", float: "right", marginRight: "30px" }}
            >
              <div
                style={{
                  backgroundColor: "rgb(56, 56, 56)",
                  width: "50px"
                }}
              >
                <FontAwesomeIcon
                  className={classes.FontAwesomeIcon}
                  icon={faChevronRight}
                />
              </div>
              <div
                style={{
                  backgroundColor: "rgb(56, 56, 56)",
                  width: "50px"
                }}
              >
                <FontAwesomeIcon
                  className={classes.FontAwesomeIcon}
                  icon={faChevronLeft}
                />
              </div>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <div className={classes.devSplit}>
                <div className={classes.devSplit} style={{ width: "400px" }}>
                  <h2>{this.state.films[0].name}</h2>
                  {`${this.state.films[0].type} | ${this.state.films[0].duration}`}
                </div>

                <div>{this.state.films[0].actors}</div>
              </div>

              <p className={classes.devSplit}>
                {this.state.films[0].description}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "25% 25% 25% 25%"
                }}
              >
                <div style={{ lineHeight: 0.3 }}>
                  3:00 <br />
                  <p style={{ color: "#777777" }}>120.0 EGP </p>
                </div>
                <div style={{ lineHeight: 0.3 }}>
                  6:00 <br />
                  <p style={{ color: "#777777" }}>120.0 EGP </p>
                </div>
                <div style={{ lineHeight: 0.3 }}>
                  9:00 <br />
                  <p style={{ color: "#777777" }}>150.0 EGP </p>
                </div>
                <div style={{ lineHeight: 0.3 }}>
                  12:00 <br />
                  <p style={{ color: "#777777" }}>150.0 EGP </p>
                </div>
              </div>
              <div className={classes.gridItem}>
                <div style={{ float: "right" }}>
                  <Button
                    btnType="Black"
                    style={{
                      height: "40px",
                      width: "120px",
                      lineHeight: "normal"
                    }}
                  >
                    <FontAwesomeIcon icon={faPlay} /> Play
                  </Button>
                  <Button
                    btnType="Black"
                    style={{
                      height: "40px",
                      width: "120px",
                      lineHeight: "normal"
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} /> More..
                  </Button>

                  <Button
                    style={{
                      height: "40px",
                      width: "120px",
                      lineHeight: "normal"
                    }}
                    btnType="Black"
                  >
                    <FontAwesomeIcon icon={faMoneyBill} /> BUY
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Auxiliary>
    );
  }
}

export default Films;
