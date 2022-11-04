import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("http://localhost:4000/api/users/register", registered)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));

    //if we have hpage to go to
    // window.location = '/'
    this.setState({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="container">
          <h4>
            <b>Register</b> below
          </h4>
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.onChange}
                value={this.state.name}
                id="name"
                className="form-control form-group"
              />

              <input
                type="text"
                placeholder="E-mail"
                onChange={this.onChange}
                value={this.state.email}
                id="email"
                error={errors.email}
                className="form-control form-group"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={this.onChange}
                value={this.state.password}
                id="password"
                error={errors.password}
                className="form-control form-group"
              />

              <input
                type="password"
                placeholder="Confirm password"
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                className="form-control form-group"
              />

              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
