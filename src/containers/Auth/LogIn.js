import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as actions from "../../store/actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import classes from "./LogIn.css";
class LogIn extends Component {
  state = {
    controls: {
      email: {
        inputType: "input",
        inputConfig: {
          type: "email",
          placeholder: "Mail Address"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        inputType: "input",
        inputConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isSignUp: true
  };
  componentDidMount() {
    if (this.props.authRedirectPath !== "/") {
      // this.props.onSetAuhRedirectPath();
    }
  }
  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
    }

    if (rules.isEmail) {
      isValid = value.trim() !== "" && isValid;
      const re = /\S+@\S+\.\S+/;
      isValid = re.test(value) && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.minLength && isValid;
    }

    return isValid;
  };
  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };
  switchSignUp = () => {
    this.setState(prevState => {
      return { isSignUp: !prevState.isSignUp };
    });
  };
  submitHandler = event => {
    event.preventDefault();

    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp
    );
    this.props.onHideLogInForm();
    console.log(this.state.controls.email.value);
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    let form = formElementsArray.map(formElement => (
      <div
        key={formElement.id}
        style={{
          display: "grid",
          gridTemplateColumns: "35px 250px",
          gridTemplateRows: "auto"
        }}
      >
        {formElement.config.inputConfig.type === "email" ? (
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ marginTop: "8px", width: "35px", height: "35px" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faLock}
            style={{ marginTop: "8px", width: "35px", height: "35px" }}
          />
        )}

        <Input
          key={formElement.id}
          elementType={formElement.config.inputType}
          elementConfig={formElement.config.inputConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={event => this.inputChangedHandler(event, formElement.id)}
        />
      </div>
    ));

    return (
      <div className={classes.Auth}>
        {/* {authRedirect} */}
        <form onSubmit={this.submitHandler} style={{ width: "300px" }}>
          {form}
          <Button btnType="Submit">SUBMIT</Button>
        </form>
        <Button btnType="Danger" clicked={this.switchSignUp}>
          SWITCH TO {this.state.isSignUp ? "SIGNIN" : "SIGNUP"}
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetAuhRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
    onHideLogInForm: () => dispatch(actions.hideLogInForm())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
