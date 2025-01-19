import React, { useState } from "react";
import validator from "validator";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("This is a strong password");
    } else {
      setErrorMessage("This is not a strong password");
    }
  };

  return (
    <div className="container">
      <h2>Check Your Password Strength</h2>
      <div>
        <label>Enter Password:</label>
        <input
          type="password"
          onChange={(e) => validate(e.target.value)}
          placeholder="Enter your password"
        />
        {errorMessage && (
          <div
            className={`message ${
              errorMessage.includes("strong") ? "success" : "error"
            }`}
          >
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
