import React, { Component } from "react";
import "./Login.module.css";

class Login extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }

  // @ts-ignore
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // @ts-ignore
  handleSubmit = (event) => {
    event.preventDefault();
    // @ts-ignore
    console.log("Submitted:", this.state.name, this.state.password);
    // API CALLS HERE
  };

  render() {
    // @ts-ignore
    const { name, password } = this.state;
    const isSubmitDisabled = !name || !password;

    return (
      <div className="loginContainer">
        <div className="loginBox">
          <p>Login</p>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name:</label>
              <br />
              <input
                type="text"
                name="name"
                //@ts-ignore
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <br />
              <input
                type="password"
                name="password"
                //@ts-ignore
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <button type="submit" disabled={isSubmitDisabled}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
