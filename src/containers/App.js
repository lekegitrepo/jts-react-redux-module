import CardList from "../components/CardList";
// import ErrorBoundary from "../components/ErrorBoundary";
// import React, { Component, useState, useEffect } from "react";
import React, { Component } from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch), // this is the same as this dispatch(requestRobots())
  };
};

// function App(props) {
//   // const [robots, setRobots] = useState([]);
//   // const [searchfield, setSearchfield] = useState("");
//   const [count, setCount] = useState(0);
//   // const [{ searchfield }] = useReducer(mapStateToProps, mapDispatchToProps)([]);
//   const { searchField, onSearchChange, robots, isPending } = props;

//   useEffect(() => {
//     // fetch("https://jsonplaceholder.typicode.com/users")
//     //   .then((response) => response.json())
//     //   .then((users) => setRobots(users));
//     // console.log(count);
//     props.onRequestRobots();
//   }, [count]); // only run if count changes.

//   // const onSearchChange = (event) => {
//   //   setSearchfield(event.target.value);
//   // };

//   const filteredRobots = robots.filter((robot) => {
//     return robot.name.toLowerCase().includes(searchField.toLowerCase());
//   });
//   return isPending ? (
//     <h1>Loading...</h1>
//   ) : (
//     <div className="tc">
//       <h1 className="f1">RoboFriends</h1>
//       <button onClick={() => setCount(count + 1)}>Click Count!</button>
//       <SearchBox searchChange={onSearchChange} />
//       <Scroll>
//         <ErrorBoundary>
//           <CardList robots={filteredRobots} />
//         </ErrorBoundary>
//       </Scroll>
//     </div>
//   );
// }

class App extends Component {
  componentDidMount() {
    console.log("This is componentDidMount");
    this.props.onRequestRobots();
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => {
  //       this.setState({ robots: users });
  //     });
  // }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    // console.log("This is render searchField: ", searchField, this.props);
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
