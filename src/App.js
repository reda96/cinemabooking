import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Home from "./containers/Home/Home";
import Screen from "./containers/Screen/Screen";
import BookingDetails from "./containers/BookingDeatails/BookingDetails";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import classes from "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import Modal from "./components/UI/Model/Model";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LOGIN from "./containers/Auth/LogIn";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

library.add(fab);

class App extends React.Component {
  state = {
    showSearchBar: false,
    showLogInForm: false
  };
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  logOut = () => {
    if (!this.props.isAuth) {
      this.props.onClickLogIn();
    } else {
      this.props.onLogOut();
    }
  };
  render() {
    let routes = (
      <Switch>
        <Route path="/screen" component={Screen} />
        <Route path="/bookingDetails" component={BookingDetails} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );
    let searchBar = (
      <div className={classes.Input}>
        <input
          className={classes.InputElement}
          style={{
            height: "40px",
            width: "100%",
            zIndex: 1000,
            float: "right"
          }}
          placeholder="SEARCH"
        />
      </div>
    );
    let logInForm = <LOGIN />;

    return (
      <div>
        <div className={classes.navBar}>
          <div className={classes.social}>
            <FontAwesomeIcon
              className={`${classes.FontAwesomeIcon} ${classes.facebook}`}
              icon={["fab", "facebook-f"]}
            />
            <FontAwesomeIcon
              className={`${classes.FontAwesomeIcon} ${classes.twitter}`}
              icon={["fab", "twitter"]}
            />
            <FontAwesomeIcon
              className={`${classes.FontAwesomeIcon} ${classes.instgram}`}
              icon={["fab", "instagram"]}
            />
            <FontAwesomeIcon
              icon={["fab", "youtube"]}
              className={`${classes.FontAwesomeIcon} ${classes.youtube}`}
            />
          </div>
        </div>
        <div className={classes.main}>
          <div
            style={{
              height: "50px",
              overflow: "visible",
              boxShadow: "0 2px 4px 0",
              width: "100%"
            }}
          >
            <ul className={classes.navbar}>
              <li onClick={() => this.setState({ showSearchBar: true })}>
                <a>
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li onClick={this.logOut}>
                {!this.props.isAuth ? (
                  <a href="#">LOGIN</a>
                ) : (
                  <a href="/">LOGOUT</a>
                )}
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
            <Modal
              show={this.state.showSearchBar}
              clicked={() => this.setState({ showSearchBar: false })}
            >
              {" "}
              {searchBar}
            </Modal>
            <Modal
              show={this.props.showLogInForm}
              clicked={() => this.props.onClickDisappear()}
            >
              {logInForm}
            </Modal>
          </div>
        </div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null,
    showLogInForm: state.auth.showLogInForm
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(actions.logout),
    onTryAutoSignUp: () => dispatch(actions.authCheckState()),
    onClickLogIn: () => dispatch(actions.showLogInForm()),
    onClickDisappear: () => dispatch(actions.hideLogInForm())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
