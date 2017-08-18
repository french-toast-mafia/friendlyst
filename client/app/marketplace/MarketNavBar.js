import React from 'react';
import { Link } from 'react-router-dom'

export default class MarketNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="marketNavContainer">
        <Link to="/additem"><div className="additem">+ Add Item</div></Link>
      </div>

    )
  }
}