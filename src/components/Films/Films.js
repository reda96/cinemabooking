import React, { Component } from "react";
import classes from "./Films.css";
import Poster from "../Poster/Poster";
import Auxiliary from "././../../hoc/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";
import imagesArray from "../../assets/images";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  faChevronRight,
  faPlay,
  faChevronLeft,
  faPlus,
  faMoneyBill,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import * as actions from "../../store/actions/index";

class Films extends Component {
  state = {
    films: [],
    i: 0,
    showWarningMessage: false
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

    let rating = [];
    if (this.props.films.length > 0) {
      for (let i = 0; i < this.props.films[this.props.counter].rating; i++) {
        rating = [<FontAwesomeIcon key={i} icon={faStar} />, rating];
      }
      film = (
        <div style={{ marginLeft: "20px" }}>
          <div className={classes.devSplit}>
            <div className={classes.devSplit} style={{ width: "400px" }}>
              <h2>{this.props.films[this.props.counter].name}</h2>
              <div style={{ display: "inline-block" }}>
                {rating.map(r => r)}
              </div>
              <div>
                {`${this.props.films[this.props.counter].type} | ${
                  this.props.films[this.props.counter].duration
                }`}
              </div>
            </div>

            <div>{this.props.films[this.props.counter].actors}</div>
          </div>

          <p className={classes.devSplit}>
            {this.props.films[this.props.counter].description}
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
                clicked={() => {
                  if (this.props.isAuth) {
                    this.props.history.push({
                      pathname: "/bookingDetails"
                    });
                  } else {
                    this.props.onBookWithoutLogIn();
                    this.setState({ showWarningMessage: true });
                    setTimeout(
                      () => this.setState({ showWarningMessage: false }),
                      3000
                    );
                  }
                }}
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
    let warningMessage = (
      <div
        style={{
          position: "fixed",
          width: "auto",
          height: "auto",

          transform: this.state.showWarningMessage
            ? "translateY(0)"
            : "translateY(-100vh)",
          transition: "all 1s ease-out",
          left: "50%",

          backgroundColor: "#f44336",
          zIndex: "500",
          color: "white",
          border: "1px solid #ccc",

          textAlign: "center",
          padding: "20px",
          fontSize: "18px",
          lineHeight: "20px"
        }}
      >
        you must login to book a ticket
      </div>
    );
    return (
      <Auxiliary>
        {this.state.showWarningMessage ? <div> {warningMessage}</div> : null}
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
const mapStateToProps = state => {
  return {
    isAuth: state.auth.token != null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onBookWithoutLogIn: () => dispatch(actions.showLogInForm())
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Films));
