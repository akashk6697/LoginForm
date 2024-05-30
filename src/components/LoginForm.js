import React, { useState, useEffect } from "react";

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validatePhone(phone);
    validateEmail(email);
  }, [phone, email]);

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneError && !emailError) {
      alert("All good!");
      setPhone("");
      setEmail("");
      setIsValid(false);
    }
  };

  useEffect(() => {
    setIsValid(!phoneError && !emailError && phone !== "" && email !== "");
  }, [phoneError, emailError, phone, email]);

  return (
    <div className="container">
      <h2>Login to DashBoard</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter 10-digit phone number"
          />
          {phoneError && <span className="error-message">{phoneError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <button type="submit" disabled={!isValid}>
          Next
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
