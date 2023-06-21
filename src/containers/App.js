import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import React, { useState, useEffect } from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  const [robots, setRobots] = useState([]);

  const onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  const { robots, searchfield } = this.state;
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
