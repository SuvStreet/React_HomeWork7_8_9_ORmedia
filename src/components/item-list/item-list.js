import React, { Component } from "react";
import PropTypes from "prop-types";

import "./item-list.css";

export default class ItemList extends Component {
  render() {
    const { data, onSelectedItem, children } = this.props;

    //console.log(this.props);

    return (
      <ul className="item-list list-group">
        {data.map((item) => {
          return (
            <li className="list-group-item" key={item.id} onClick={() => onSelectedItem(item.id)}>
              {children(item)}
            </li>
          );
        })}
      </ul>
    );
  }
}

ItemList.propTypes = {
  onSelectedItem: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};