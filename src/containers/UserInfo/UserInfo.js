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

export default UserInfo;
