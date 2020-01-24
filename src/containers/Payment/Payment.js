import React, { Component } from "react";
import classes from "./Payment.css";
import payment from "../../assets/payment.PNG";
class Payment extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "auto" }}>
        <div className={classes.container}>
          <div></div>
          <div className={classes.pricingTable}>
            <div className={classes.credit}>Credit/Debit Card</div>
            <div className={classes.price}>62.0 EGP</div>

            <div style={{ borderBottom: "#dddddd 1px solid" }}>
              <img style={{ width: "300px" }} src={payment} />
            </div>
            <div style={{ color: "#cccccc", textAlign: "center" }}>
              No Extra Fees{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
