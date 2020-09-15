import React, { Component } from "react";

import Header from "../header";
import RandomTanks from "../random-tanks";
import TankopediaService from "../../services/tankopedia-service";
import { TankopediaServiceProvider } from "../../context";
import HeavyPage from "../pages/heavy-page";
import MediumPage from "../pages/medium-page";
import LightPage from "../pages/linght-page";
import PtSauPage from "../pages/pt-sau-page";
import SauPage from "../pages/sau-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import TestService from "../../services/test-services";

import "./app.css";

export default class App extends Component {
  tankopediaService = new TankopediaService();
  // тест смена сервера с данными
  //testService = new TestService();

  state = {
    showRandomTanks: true,
    //selectedHeavy: null,
    //selectedMedium: null,
    //selectedLight: null,
  };

  /* onSelectedHeavy = (id) => {
    this.setState(() => {
      return {
        selectedHeavy: id,
      };
    });
  };

  onSelectedMedium = (id) => {
    this.setState(() => {
      return {
        selectedMedium: id,
      };
    });
  };

  onSelectedLight = (id) => {
    this.setState(() => {
      return {
        selectedLight: id,
      };
    });
  }; */

  render() {
    const tanks = this.state.showRandomTanks ? <RandomTanks /> : null;

    return (
      <TankopediaServiceProvider value={this.tankopediaService}>
        <Router>
          <div className="tanksdb-app">
            <Header />
            {tanks}

            <Switch>
              <Route
                path="/"
                render={() => <h1>Welcome Tankopedia!!!</h1>}
                exact
              />
              <Route path="/heavy" component={HeavyPage} exact />
              <Route path="/heavy/:id?" component={HeavyPage} />

              <Route path="/medium" component={MediumPage} exact/>
              <Route path="/medium/:id?" component={MediumPage} />
              {/* <Route path="/medium/:id" component={MediumPage} /> */}

              <Route path="/light" component={LightPage} exact/>
              <Route path="/light/:id?" component={LightPage} />

              <Route path="/pt-sau" component={PtSauPage} exact/>
              <Route path="/pt-sau/:id?" component={PtSauPage} />

              <Route path="/sau" component={SauPage} exact/>
              <Route path="/sau/:id?" component={SauPage} />

              <Route render={() => <h1>Page not found!</h1>} />
            </Switch>
          </div>
        </Router>
      </TankopediaServiceProvider >
    );
  }
}
