import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Country: "",
      Comment: "",
      validation: {
        Name: {
          isValid: false,
          errorMessage: "",
        },
        Country: {
          isValid: false,
          errorMessage: "",
        },
      },
    };
  }
  isValidText = (text) => {
    return text && text != "";
  };
  handleNameChange = (event) => {
    this.setState({
      Name: event.target.value,
      validation: {
        ...this.state.validation,
        Name: {
          isValid: this.isValidText(event.target.value),
          errorMessage: "",
        },
      },
    });
  };
  handleCountryChange = (event) => {
    this.setState({
      Country: event.target.value,
      validation: {
        ...this.state.validation,
        Country: {
          isValid: this.isValidText(event.target.value),
          errorMessage: "",
        },
      },
    });
  };
  handleCommentChange = (event) => {
    this.setState({ Comment: event.target.value });
  };
  bindInResult = () => {
    document.getElementById(
      "result"
    ).innerHTML = `Name : ${this.state.Name} <br/> Country : ${this.state.Country} <br/> About Country : ${this.state.Comment}`;
  };
  validateForm = () => {
    let valid = true;
    let validation = {
      Name: { isValid: true, errorMessage: "" },
      Country: { isValid: true, errorMessage: "" },
    };
    if (!this.state.validation.Name.isValid) {
      validation.Name.errorMessage = "Enter a valid Name";
      validation.Name.isValid = false;
      valid = false;
    }
    if (!this.state.validation.Country.isValid) {
      validation.Country.errorMessage = "Select a valid Country";
      validation.Country.isValid = false;
      valid = false;
    }
    this.setState({ validation: validation });
    return valid;
  };
  handleSubmitClick = (event) => {
    if (this.validateForm()) {
      this.bindInResult();
    }
    // alert(
    //   `Name : ${this.state.Name} Country : ${this.state.Country} About Country : ${this.state.Comment}`
    // );
    // this method stop reloading page on form submission
    event.preventDefault();
  };

  render() {
    return (
      <div className="container border-blue-1 mt-2">
        <h3 className="align-text-center">Form</h3>
        <div className="row m-2">
          <div className="col-sm-6">
            <form onSubmit={this.handleSubmitClick}>
              <div>
                <label>Name</label>
                <input
                  value={this.state.Name}
                  onChange={this.handleNameChange}
                />
                <span className="color-red">
                  {this.state.validation.Name.errorMessage}
                </span>
              </div>
              <div>
                <label>Country</label>
                <select
                  value={this.state.Country}
                  onChange={this.handleCountryChange}
                >
                  <option value="">Select Country</option>
                  <option value="INDIA">INDIA</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="JAPAN">JAPAN</option>
                  <option value="NEPAL">Nepal</option>
                </select>
                <span className="color-red">
                  {this.state.validation.Country.errorMessage}
                </span>
              </div>
              <div>
                <label>Your View </label>
                <textarea
                  value={this.state.Comment}
                  onChange={this.handleCommentChange}
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-sm-5">
            <div id="result"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
