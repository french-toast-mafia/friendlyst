import React from 'react';

export default class MarketNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="marketNavContainer">
        <a href="/additem">
          <div className="additem">
            Add Item
          </div>
        </a>
      </div>

    )
  }
}