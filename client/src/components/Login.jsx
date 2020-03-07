import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.userHasAuthenticated(true);
  }
  const signInCSS = {
    maxWidth: "120px",
    marginLeft: "auto",
    border: "solid",
    borderRadius: "10px",






  }
  const btnStyle = {
    border: "solid",
    borderRadius: "10px"
  }

  return (
    <div style={signInCSS}>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl style={signInCSS}
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <ControlLabel>Password</ControlLabel>
          <FormControl style={signInCSS}
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          </FormGroup>
        <Button style={btnStyle} disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
