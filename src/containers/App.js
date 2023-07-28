import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import React, { useState, useEffect } from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { connect } from "react-redux";
import { setSearchField } from "../actions";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

function App(props) {
  const [robots, setRobots] = useState([]);
  // const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);
  // const [{ searchfield }] = useReducer(mapStateToProps, mapDispatchToProps)([]);
  const { searchField, onSearchChange } = props;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
    console.log(count);
  }, [count]); // only run if count changes.

  // const onSearchChange = (event) => {
  //   setSearchfield(event.target.value);
  // };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click Count!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
