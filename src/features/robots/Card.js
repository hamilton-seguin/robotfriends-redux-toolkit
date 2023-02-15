import React from "react";
import "./Card.css";
import CardDetails from "./CardDetails";

const Card = ({ id, robot, selected, hidden }) => {
  const isHidden = () => (hidden === null || hidden === id ? "" : "hidden");
  const onClick = () => () => selected(id);
  const lazyOrAuto = (id) => (id > 6 ? "lazy" : "auto");
  const width = () => (hidden ? "" : "w5");

  return (
    <div
      className={`bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card ${width()} ${isHidden()}`}
      onClick={onClick}
    >
      <img
        alt={`robot-${id}`}
        src={`https://robohash.org/${id}?size=200x200`}
        id={id}
        loading={lazyOrAuto(id)}
        height={"200px"}
        width={"200px"}
      />
      <div className="cardInfo" id="cardInfo">
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
      <CardDetails hidden={hidden} robot={robot} />
    </div>
  );
};

export default Card;
