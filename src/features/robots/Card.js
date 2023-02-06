import React from "react";

const Card = ({ id, name, email, selected, hidden }) => {
  const isHidden = () => (hidden === null || hidden === id ? "" : "hidden");
  const onClick = () => {
    return selected(id);
    };
  const lazyOrAuto = (id) => {
    if(id>6){return "lazy"}
    return "auto"
  }
  
  return (
    <div
      className={`bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card ${isHidden()}`}
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
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;