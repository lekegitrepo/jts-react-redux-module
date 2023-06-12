import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw Error("Nooooo!");
  }
  return (
    <div>
      {robots.map((robot) => {
        return (
          <Card
            id={robot.id}
            name={robot.name}
            email={robot.email}
            key={robot.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
