import React from "react";

const CardDetail = ({ hidden, robot }) => {
  const hideExtendedInfo = () => (hidden === robot.id ? "" : "hidden");

  return (
    <div className={`${hideExtendedInfo()}`}>
      <br />
      <p><b>Company:</b> {robot.company.name}</p>
      <p><b>Location:</b> {robot.address.city} </p>
      <p><b>Catch phrase: </b></p>
      <em>{robot.company.catchPhrase}</em>
    </div>
  );
};

 export default CardDetail;