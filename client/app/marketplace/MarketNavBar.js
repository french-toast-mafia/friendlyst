import React from 'react';
import { Link } from 'react-router-dom'

export default class MarketNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="marketNavContainer">
        {/* <a href="/additem">
          <div className="additem">
            Add Item
          </div>
        </a> */}
        <Link to="/additem"><button>Click meeeee</button></Link>
      </div>

    )
  }
}