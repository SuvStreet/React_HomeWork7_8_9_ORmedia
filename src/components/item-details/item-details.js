import React, { Component } from "react";

import TankopediaService from "../../services/tankopedia-service";
import ErrorButton from "../error-button";
import ErrorBondary from "../error-boundary";

import "./item-details.css";

export default class ItemDetails extends Component {
  tankopediaService = new TankopediaService();

  state = {
    ItemsInfo: {},
  };

  /* тяжёлые танки 
  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.tankopediaService.getHeavy(this.props.selectedItem).then(data => {
        this.setState({
          ItemsInfo: data,
        });
      });
      //console.log(this.state);
    }
  }*/

  /* средние танки*/
   componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.tankopediaService.getMedium(this.props.selectedItem).then(data => {
        this.setState({
          ItemsInfo: data,
        });
      });
      //console.log(this.state);
    }
  } 

  /* лёгкие танки
  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.tankopediaService.getLight(this.props.selectedItem).then(data => {
        this.setState({
          ItemsInfo: data,
        });
      });
      //console.log(this.state.image);
    }
  } */

  render() {
    const { id, name } = this.state.ItemsInfo;
    const { getImage, children } = this.props;
    const { ItemsInfo } = this.state;
    return (
      <div className="tanks-details card">
        {<img
          className="tanks-image col-md-6"
          src={getImage({ id })}
          alt="character"
        />}

        <ErrorBondary>
          <div className="card-body col-md-6">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(children, (child) => {
                return React.cloneElement(child, { ItemsInfo });
              })}
              <ErrorButton />
            </ul>
          </div>
        </ErrorBondary>
      </div>
    );
  }
}

