import React from "react";

import { Route, Switch } from "react-router-dom";

import Pay from "./Pay";
import Paid from "./Paid";
import Nav from "./Nav";
import Top from "./Top";

function App() {
  return (
    <>
      <h1>うっち、こんにちは！</h1>
      <Nav />
      <main>
        <Switch>
          <Route path="/" component={Top} exact />
          <Route path="/pay" component={Pay} />
          <Route path="/paid" component={Paid} />
          <Route component={Error} />
        </Switch>
      </main>
    </>
  );
}

export default App;
