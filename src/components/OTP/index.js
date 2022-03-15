import React, { useState } from "react";
import firebase from "./firebase";

function OtpDemo() {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleChangeNumber = e => {
    // const { name, value } = e.target;
    setNumber(e.target.value);
  };
  const handleChangeOTP = e => {
    // const { name, value } = e.target;
    setOtp(e.target.value);
  };

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth
      .RecaptchaVerifier("sign-in-button", {
      size: "invisible",
      callback: response => {
        onSignInSubmit();
        console.log("Recaptcha verified");
      },
      defaultCountry: "IN"
    });
  };

  const onSignInSubmit = e => {
    e.preventDefault();

    configureCaptcha();
    const phoneNumber = "+92" + number;
    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
      })
      .catch(error => {
        console.log("SMS not sent", error);
      });
  };

  const onSubmitOTP = e => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then(result => {
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("User is verified");
      })
      .catch(error => {
        console.log("");
      });
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-button" />
        <input
          type="number"
          name="mobile"
          placeholder="Mobile number"
          onChange={handleChangeNumber}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Enter OTP</h2>
      <form onSubmit={onSubmitOTP}>
        <input
          type="number"
          name="otp"
          placeholder="OTP number"
          onChange={handleChangeOTP}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OtpDemo;
