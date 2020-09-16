import React, { Component } from "react";

import TankopediaService from "../../services/tankopedia-service";
import ErrorButton from "../error-button";
import ErrorBondary from "../error-boundary";
import PropTypes from "prop-types";

import "./item-details.css";

export default class ItemDetails extends Component {
  tankopediaService = new TankopediaService();

  state = {
    itemsInfo: {},
  };

  /* static defaultProps = {
    selectedItem: 1
  } */

  updateItem() {
    const { selectedItem, getData } = this.props;

    if (!selectedItem) {
      return;
    }

    getData(selectedItem).then((data) => {
      this.setState({
        itemsInfo: data,
      });
    })
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.updateItem();
    }
  }

  /* componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.props.getData(this.props.selectedItem).then(data => {
        this.setState({
          itemsInfo: data,
          image: this.props.getImage(data),
        });
      });
      //console.log(this.state);
    }
  } */

  render() {
    const { id, name } = this.state.itemsInfo;
    const { getImage, children, selectedItem } = this.props;
    const { itemsInfo } = this.state;
    
    if (!selectedItem) {
      return <span>Select a person from a list</span>;
    }

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
                return React.cloneElement(child, { itemsInfo });
              })}
              <ErrorButton />
            </ul>
          </div>
        </ErrorBondary>
      </div>
    );
  }
}

/* ItemDetails.defaultProps = {
  selectedItem: 1
} */

ItemDetails.propTypes = {
  selectedItem: PropTypes.number
}