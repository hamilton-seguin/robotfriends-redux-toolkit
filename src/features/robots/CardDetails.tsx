import React from "react";
import { IRobot } from "./CardList";


interface ICardDetailProps {
  hidden: number | null,
  robot: IRobot
}
const CardDetail = ({ hidden, robot }: ICardDetailProps) => {
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