import React, { Component } from "react";

import Header from "../header";
import RandomTanks from "../random-tanks";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details";
import TankopediaService from "../../services/tankopedia-service";
import Column from "../column";
import Record from "../record";

import "./app.css";

export default class App extends Component {
  tankopediaService = new TankopediaService();

  state = {
    showRandomTanks: true,
    selectedItem: null,
    image: "",
  };

  onSelectedItem = (id) => {
    //console.log(id);
    this.setState(() => {
      return {
        selectedItem: id,
      };
    });
    //console.log(this.state);
  };

  render() {
    const tanks = this.state.showRandomTanks ? <RandomTanks /> : null;
    const { getLightImage, getHeavyImage, getMediumImage, getAllHeavy, getAllMedium, getAllLight } = this.tankopediaService;

    // тяжёлые танки 
    /* const HeavyDetails = (
      <ItemDetails
        selectedItem={this.state.selectedItem}
        getImage={getHeavyImage} >
        <Record label="Damage" field="damage" />
        <Record label="Breaking Through" field="breakingThrough" />
        <Record label="Weight" field="weight" />
        <Record label="Strength" field="strength" />
        <Record label="Body Armor" field="bodyArmor" />
        <Record label="Tower Armor" field="towerArmor" />
      </ItemDetails>
    );
    const HeavyList = (
      <ItemList
        onSelectedItem={this.onSelectedItem}
        getData={getAllHeavy}
      >
        {(item) => `${item.name}`}
      </ItemList>
    ); */

    // Средние танки 
    const MediumDetails = (
      <ItemDetails
        selectedItem={this.state.selectedItem}
        getImage={getMediumImage} >
        <Record label="Damage" field="damage" />
        <Record label="Breaking Through" field="breakingThrough" />
        <Record label="Maximum Speed" field="maximumSpeed" />
        <Record label="Specific Power" field="specificPower" />
        <Record label="Tower TurningSpeed" field="towerTurningSpeed" />
      </ItemDetails>
    );
    const MediumList = (
      <ItemList
        onSelectedItem={this.onSelectedItem}
        getData={getAllMedium}
      >
        {(item) => `${item.name}`}
      </ItemList>
    );


    // лёгкие танки
    /* const LightDetails = (
      <ItemDetails
        selectedItem={this.state.selectedItem}
        getImage={getLightImage} >
        <Record label="Weight" field="weight" />
        <Record label="Overview" field="overview" />
        <Record label="Maximum Speed" field="maximumSpeed" />
        <Record label="Specific Power" field="specificPower" />
        <Record label="Engine Power" field="enginePower" />
      </ItemDetails>
    ); 
    const LightList = (
      <ItemList
        onSelectedItem={this.onSelectedItem}
        getData={getAllHeavy}
      //renderItem={(item) => `${item.name} || ${item.overview}`} 
      >
        {(item) => `${item.name}`}
      </ItemList>
    );*/

    return (
      <div className="tanksdb-app">
        <Header />
        {tanks}
        {/* тяжёлые танки 
        <Column top={HeavyDetails} bottom={HeavyList}></Column> */}
        {/* средние танки*/}
        <Column top={MediumDetails} bottom={MediumList}></Column>
        {/* лёгкие танки
        <Column top={LightDetails} bottom={LightList}></Column> */}
      </div>
    );
  }
}
