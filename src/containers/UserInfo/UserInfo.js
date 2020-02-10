import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import classes from "./UserInfo.css";
import {
  faChevronRight,
  faChevronLeft,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class UserInfo extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className={classes.sectionTitle}>User Information</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <Input />
              </td>
            </tr>
            <tr>
              <td>
                <label>Send connformation to</label>
              </td>
              <td>
                <Input />
              </td>
            </tr>
            <tr>
              <td>
                <label>Mobile Phone</label>
              </td>
              <td>
                <Input />
              </td>
            </tr>
          </tbody>
        </table>
        <hr style={{ width: "100%", marginTop: "40px" }}></hr>
        <Button
          classes={classes.Next}
          disabled={this.props.reservations.length > 0 ? false : true}
          clicked={() => this.props.history.replace("/payment")}
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
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
