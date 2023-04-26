import React, { Component } from "react";

// export default function Hello() {
//   return <div>Hello World!!!</div>;
// }

// class Hello extends Component {
//   render() {
//     return (
//       <div className="f1 tc">
//         <h1>Hello World!!!</h1>
//         <div>Welcome to the Javascript framework react world.</div>
//         <div>{this.props.greetings}</div>
//       </div>
//     );
//   }
// }

const Hello = (props) => {
  return (
    <div className="f1 tc">
      <h1>Hello World!!!</h1>
      <div>Welcome to the Javascript framework react world.</div>
      <p>{props.greetings}</p>
    </div>
  );
};

export default Hello;
