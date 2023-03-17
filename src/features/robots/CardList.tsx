import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../services/hook";

import { useGetRobotsListQuery } from "../../services/robotsAPI";
import Card from "./Card";

export interface IRobot {
  name: string;
  id: number;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
}

const CardList = () => {
  //RTK Query
  const { data, isLoading, isSuccess } = useGetRobotsListQuery();

  //Searchfield state
  const searchField = useAppSelector((state) => state.searchRobots.searchField);

  //which card is selected from Card props
  const [selected, setSelected] = useState<number | null>(null);
  const selectCard = (selectedCardId: number) => {
    selected ? setSelected(null) : setSelected(selectedCardId);
    return selected;
  };

  //reset selected if new search
  useEffect(() => {
    setSelected(null);
  }, [searchField]);

  if (isLoading) return <h1> Loading </h1>;
  if (!isSuccess) return <h1> Oops. That is not good</h1>;

  //data loaded
  if (isSuccess) {
    const robots = data.filter((robot: IRobot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (!robots.length) {
      return <h1 className="pv6">No robots with that name</h1>;
    }
    return (
      <>
        <div className="mv3">
          {robots.map((user: IRobot, i: number) => {
            return (
              <Card
                key={robots[i].id}
                id={robots[i].id}
                robot={robots[i]}
                selected={selectCard}
                hidden={selected}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default CardList;
