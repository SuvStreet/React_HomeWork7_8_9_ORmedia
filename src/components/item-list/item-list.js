import React, { Component } from "react";

import "./item-list.css";

class ItemList extends Component {
  render() {
    const { data, onSelectedItem } = this.props;

    return (
      <ul className="item-list list-group">
        {data.map((item) => {
          return (
            <li className="list-group-item" key={item.id} onClick={() => onSelectedItem(item.id)}>
              {this.props.children(item)}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ItemList;