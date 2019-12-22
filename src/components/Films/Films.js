import React, { Component } from "react";
import classes from "./Films.css";
import Poster from "../Poster/Poster";
import Auxiliary from "././../../hoc/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";
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
    this.setState({ films: films });
  }
  handleRightShift = () => {
    console.log(this.state);
    if (this.state.i < this.props.films.length - 1) {
      this.setState({ i: this.state.i + 1 });
    }
  };
  handleLeftShift = () => {
    console.log(this.state);
    if (this.state.i > 0) {
      this.setState({ i: this.state.i - 1 });
    }
  };
  render() {
    let film = null;

    if (this.state.films.length > 0) {
      // console.log(this.state.films[0].name);
      film = (
        <div style={{ marginLeft: "20px" }}>
          <div className={classes.devSplit}>
            <div className={classes.devSplit} style={{ width: "400px" }}>
              <h2>{this.state.films[this.state.i].name}</h2>
              {`${this.state.films[this.state.i].type} | ${
                this.state.films[this.state.i].duration
              }`}
            </div>

            <div>{this.state.films[this.state.i].actors}</div>
          </div>

          <p className={classes.devSplit}>
            {this.state.films[this.state.i].description}
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
                  onClick={() => this.handleRightShift()}
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
                  onClick={() => this.handleLeftShift()}
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
