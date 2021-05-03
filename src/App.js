import React, { Component } from "react";
import CartList from "./components/CartList";
import SearchBox from "./components/SearchBox";
import { robots } from "./robot";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchFiled: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchFiled: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchFiled.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RobotsFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CartList robots={filterRobots} />
      </div>
    );
  }
}

export default App;
