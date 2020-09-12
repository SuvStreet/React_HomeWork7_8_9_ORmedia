import React, { Component } from "react";

import Header from "../header";
import RandomTanks from "../random-tanks";
import { HeavyList, MediumList, LightList } from "../wot-components/list";
import { HeavyDetails, MediumDetails, LightDetails } from "../wot-components/details";
import TankopediaService from "../../services/tankopedia-service";
import Column from "../column";
import { TankopediaServiceProvider } from "../../context";
import TestService from "../../services/test-services";

import "./app.css";

export default class App extends Component {
  tankopediaService = new TankopediaService();
  // тест смена сервера с данными
  testService = new TestService();

  state = {
    showRandomTanks: true,
    //selectedHeavy: null,
    //selectedMedium: null,
    //selectedLight: null,
  };

  onSelectedHeavy = (id) => {
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
  };

  render() {
    const tanks = this.state.showRandomTanks ? <RandomTanks /> : null;
    const { selectedHeavy, selectedMedium, selectedLight } = this.state;

    // тяжёлые танки 
    const heavyDetails = <HeavyDetails selectedItem={selectedHeavy}></HeavyDetails>;
    const heavyList = <HeavyList onSelectedItem={this.onSelectedHeavy}></HeavyList>;

    // Средние танки 
    const mediumDetails = <MediumDetails selectedItem={selectedMedium}></MediumDetails>;
    const mediumList = <MediumList onSelectedItem={this.onSelectedMedium}></MediumList>;


    // лёгкие танки
    const lightDetails = <LightDetails selectedItem={selectedLight}></LightDetails>;
    const lightList = <LightList onSelectedItem={this.onSelectedLight}></LightList>;

    return (
      <TankopediaServiceProvider value={this.tankopediaService}>
        <div className="tanksdb-app">
          <Header />
          {tanks}
          {/* тяжёлые танки */}
          <Column top={heavyDetails} bottom={heavyList}></Column>
          {/* средние танки */}
          <Column top={mediumDetails} bottom={mediumList}></Column>
          {/* лёгкие танки */}
          <Column top={lightDetails} bottom={lightList}></Column> 
        </div>
      </TankopediaServiceProvider>
    );
  }
}
