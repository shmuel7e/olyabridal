import React from "react";
import { Router, Switch, Route } from "react-router";
import history from "./history";
import "./App.css";
import Home from "./pages/Home.jsx";
import Header from "./cmps/Header.jsx";
import Collection from "./pages/Collection.jsx";
import C2020 from './pages/C2020.jsx';
import C2021 from './pages/C2021.jsx';
import SideBar from './cmps/SideBar.jsx';

export default function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <SideBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/collection" component={Collection} />
          <Route path="/2020" component={C2020} />
          <Route path="/2021" component={C2021} />
        </Switch>
      </Router>
    </div>
  );
}

// wtf //