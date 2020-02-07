import React, { Component } from "react";
import classes from "./Payment.css";
import payment from "../../assets/payment.PNG";
import {
  faChevronRight,
  faChevronLeft,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";
class Payment extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "auto", backgroundColor: "white" }}>
        <div className={classes.container}>
          <div></div>
          <div className={classes.pricingTable}>
            <div className={classes.credit}>Credit/Debit Card</div>
            <div className={classes.price}>62.0 EGP</div>

            <div style={{ border: "#dddddd 1px solid" }}>
              <img
                className={classes.image}
                style={{ width: "290px" }}
                src={payment}
              />
            </div>
            <div style={{ color: "#cccccc", textAlign: "center" }}>
              No Extra Fees{" "}
            </div>
          </div>
        </div>
        <hr></hr>
        <Button
          classes={classes.Next}
          //   clicked={() => {
          //     this.props.onChoosenDetails({
          //       date: this.state.date,
          //       time: this.state.time,
          //       screen: this.state.screen,
          //       filmName: this.props.films[this.props.counter].name
          //     });
          //     this.props.history.replace("/screen");
          //   }}
        >
          next <FontAwesomeIcon icon={faChevronRight} />
        </Button>
        <Button classes={classes.previous}>
          <FontAwesomeIcon icon={faChevronLeft} /> previous
        </Button>
        <Button classes={classes.Cancel}>
          <FontAwesomeIcon icon={faTimes} /> cancel
        </Button>
      </div>
    );
  }
}

export default Payment;
