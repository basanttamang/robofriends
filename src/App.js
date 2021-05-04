import React, { Component } from "react";
import CartList from "./components/CartList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchFiled: event.target.value });
  };

  render() {
    const { robots, searchFiled } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchFiled.toLowerCase());
    });
    return !this.state.robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>RobotsFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CartList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
