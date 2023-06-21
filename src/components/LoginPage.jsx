// import { useCallback } from "react";
import { TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import "./css/login.css";
const LoginPage = () => {

  return (
    <div className="sign-up-page">
      <form className="sign-up-form" id="signUp-form">

        <button
          className="sign-up-btn"
          id="sign-up-btn"
        >
          <div className="sign-up">SIGN UP</div>
        </button>

        <div className="password-field">
          <div className="password">Password</div>
          <TextField
            className="password-input-field"
            sx={{ width: 488 }}
            color="primary"
            variant="outlined"
            type="password"
            name="Password"
            id="password-input"
            size="medium"
            margin="none"
            required
          />
        </div>

        <div className="email-field">
          <div className="email-title">Email</div>
          <TextField
            className="password-input-field"
            sx={{ width: 488 }}
            color="primary"
            variant="outlined"
            type="email"
            name="email-text"
            id="email-input"
            size="medium"
            margin="none"
            required
          />
        </div>

        <div className="sign-up1">SIGN UP</div>
      </form>
    </div>
  );
};

export default LoginPage;