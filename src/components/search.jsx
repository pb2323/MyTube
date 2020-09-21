import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class search extends Component {
  state = {
    searchQuery: "",
  };
  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.history.push(`/search/${this.state.searchQuery}`);
  };

  render() {
    return (
      <form
        className="input-group mb-3"
        onSubmit={this.handleSubmit}
        style={{ margin: "10px auto", width: "60%" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          name="searchQuery"
          onChange={this.handleChange}
          value={this.props.searchQuery}
        />
        <div className="input-group-append">
          <input
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
            value="Search"
          />
        </div>
      </form>
    );
  }
}

export default withRouter(search);
