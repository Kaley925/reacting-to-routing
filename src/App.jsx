import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Films from "./Components/Films";
import People from "./Components/People";
import Navbar from "./Components/Navbar";
import PeopleDetails from "./Components/PeopleDetails";



const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Films">
          <Films />
        </Route>
        <Route exact path="/People">
          <People />
        
        </Route>
        <Route exact path="/People/:id">
          <PeopleDetails />
        
        </Route>
        <Route path="*">
          <h1>Sorry, no path Available</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
