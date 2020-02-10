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
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
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
          disabled={this.props.reservations.length > 0 ? false : true}
          clicked={() => this.props.history.replace("/")}
        >
          next <FontAwesomeIcon icon={faChevronRight} />
        </Button>
        <Button
          classes={classes.previous}
          clicked={() => {
            this.props.onCancel(this.props.reservations);
            this.props.history.replace("/");
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} /> previous
        </Button>
        <Button
          classes={classes.Cancel}
          clicked={() => {
            this.props.onCancel(this.props.reservations);
            this.props.history.replace("/");
          }}
        >
          <FontAwesomeIcon icon={faTimes} /> cancel
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reservations: state.screens.reservationDetails
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCancel: details => dispatch(actions.cancelBooking(details))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
