import React from "react";

import Counter from "./features/counter/Counter";
import SearchBox from "./features/searchBox/SearchBox";
import CardList from "./features/robots/CardList";
import ErrorBoundry from "./features/misc/ErrorBoundry";
import Scroll from "./features/misc/Scroll";

import "./App.css";
import "tachyons";

const App = () => {
  return (
    <div className="tc mw-100">
      <Scroll>
        <h1 className="f1 ">RobotFriends</h1>
        <Counter />
        <SearchBox />
      </Scroll>
      <ErrorBoundry>
        <CardList />
      </ErrorBoundry>
    </div>
  );
};

export default App;
