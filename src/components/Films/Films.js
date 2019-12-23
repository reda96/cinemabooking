import React, { Component } from "react";
import classes from "./Films.css";
import Poster from "../Poster/Poster";
import Auxiliary from "././../../hoc/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";
import imagesArray from "../../assets/images";
import {
  faChevronRight,
  faPlay,
  faChevronLeft,
  faPlus,
  faMoneyBill
} from "@fortawesome/free-solid-svg-icons";
class Films extends Component {
  state = {
    films: [],
    i: 0
  };
  componentDidMount() {
    const films = [];
    for (let key in this.props.films) {
      films.push({ ...this.props.films[key], id: key });
    }
    this.setState({ films: films, i: this.props.counter });
  }

  render() {
    let film = null;

    if (this.state.films.length > 0) {
      film = (
        <div style={{ marginLeft: "20px" }}>
          <div className={classes.devSplit}>
            <div className={classes.devSplit} style={{ width: "400px" }}>
              <h2>{this.state.films[this.props.counter].name}</h2>
              {`${this.state.films[this.props.counter].type} | ${
                this.state.films[this.props.counter].duration
              }`}
            </div>

            <div>{this.state.films[this.props.counter].actors}</div>
          </div>

          <p className={classes.devSplit}>
            {this.state.films[this.props.counter].description}
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
      );
    }
    let poster = <div></div>;
    if (this.state.films.length) {
      poster = (
        <div className={classes.gridItem}>
          <Poster
            imgUrl={imagesArray[this.props.counter]}
            width="350px"
            height="505px"
          />
        </div>
      );
    }
    return (
      <Auxiliary>
        <div className={classes.gridContainer}>
          {poster}

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
                  onClick={() => this.props.rightShift()}
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
                  onClick={() => this.props.leftShift()}
                />
              </div>
            </div>
            {film}
          </div>
        </div>
      </Auxiliary>
    );
  }
}

export default Films;