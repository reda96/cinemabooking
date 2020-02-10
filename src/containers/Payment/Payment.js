import React, { Component } from "react";
import classes from "./Payment.css";
import payment from "../../assets/payment.PNG";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
  faFilm,
  faCalendar,
  faClock,
  faMoneyBill,
  faCheck,
  faTicketAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class Payment extends Component {
  state = {};
  render() {
    return (
      <div className={classes.row}>
        <div className={classes.reservationDetails}>
          <div style={{ float: "left", color: "#ffffff" }}>
            <FontAwesomeIcon icon={faFilm} />
            {this.props.filmName}
            {"| "} <FontAwesomeIcon icon={faCalendar} /> {this.props.filmDate}
            {"| "} <FontAwesomeIcon icon={faClock} /> {this.props.filmTime}
            {"| "}
            <FontAwesomeIcon icon={faTicketAlt} />{" "}
            {this.props.reservations.length}
          </div>
          <div>
            <div style={{ paddingTop: "40px" }} />
            <div>
              <div
                className={classes.stages}
                style={{
                  width: "450px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr"
                }}
              >
                <div className={classes.circle}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={classes.fontawesome}
                  />
                  <p
                    style={{
                      marginLeft: "-10px",

                      fontSize: "10px"
                    }}
                  >
                    SEATING
                  </p>
                </div>
                <div className={classes.circle}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={classes.fontawesome}
                  />
                  <p
                    style={{
                      marginLeft: "-10px",

                      fontSize: "10px"
                    }}
                  >
                    USERINFO
                  </p>
                </div>
                <div className={classes.circle}>
                  <p
                    style={{
                      marginTop: "35px",
                      marginLeft: "-10px",

                      fontSize: "10px"
                    }}
                  >
                    PAYMENT
                  </p>
                </div>
                <div className={classes.circle}>
                  <p
                    style={{
                      marginTop: "35px",
                      marginLeft: "-10px",
                      color: "#EFEFEF",
                      fontSize: "10px"
                    }}
                  >
                    MONEY COLLECTION
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.container}>
          <div></div>
          <div className={classes.pricingTable}>
            <div className={classes.credit}>Credit/Debit Card</div>
            <div className={classes.price}>
              {this.props.reservations.length * 60 + "$"}
            </div>

            <div style={{ border: "#dddddd 1px solid" }}>
              <img
                className={classes.image}
                style={{ width: "295px", marginLeft: "2px" }}
                src={payment}
                onClick={() => {
                  this.props.onConfirm(this.props.reservations);
                  this.props.history.replace("/");
                }}
              />
            </div>
            <div style={{ color: "darkgray", textAlign: "center" }}>
              No Extra Fees{" "}
            </div>
          </div>
        </div>
        <hr></hr>
        <Button
          classes={classes.Next}
          disabled={this.props.reservations.length > 0 ? false : true}
          clicked={() => {
            this.props.onCanfirm(this.props.reservations);
            this.props.history.replace("/");
          }}
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
    onCancel: details => dispatch(actions.cancelBooking(details)),
    onConfirm: reservations =>
      dispatch(actions.confirmReservation(reservations))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
