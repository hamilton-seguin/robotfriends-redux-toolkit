import React from "react";

import Counter from "./features/counter/Counter";
import SearchBox from "./features/searchBox/SearchBox";
import CardList from "./features/robots/CardList";
import ErrorBoundry from "./features/misc/ErrorBoundry";
import Scroll from "./features/misc/Scroll";
import Header from "./features/misc/Header";

import "./App.css";
import "tachyons";

const App = () => {
  return (
    <div className="tc">
      <Scroll>
        <Header />
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
