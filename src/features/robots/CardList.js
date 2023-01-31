import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useGetRobotsListQuery } from "../../services/robotsAPI";
import Card from "./Card";

const CardList = () => {
  //RTK Query
  const { data, isLoading, isSuccess } = useGetRobotsListQuery();

  //Searchfield state
  const searchField = useSelector((state) => state.searchRobots.searchField);

  //which card is selected from Card props
  const [selected, setSelected] = useState(null);
  const selectCard = (selectedCard) => {
    selected ? setSelected(null) : setSelected(selectedCard);
    return selected;
  };

  //reset selected if new search
  useEffect(() => {
    setSelected(null);
  }, [searchField]);

  if (isLoading) return <h1> Loading </h1>;
  if (!isSuccess) return <h1> Oops. That is not good</h1>;

  if (data) {
    const robots = data.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    }); 
    if (!robots.length) {
      return <h1 className="pv6">No robots with that name</h1>;
    }
    return (
      <>
        <div className="mv3">
          {robots.map((user, i) => {
            return (
              <Card
                key={robots[i].id}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
                selected={selectCard}
                hidden={selected}
              />
            );
          })}
        </div>
      </>
    );
  }
};

export default CardList;
