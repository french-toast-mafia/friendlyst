import React from 'react';
import MarketListEntry from './MarketListEntry';

export default class MarketList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className="marketListContainer">
        {this.props.itemList.map((item, index) => 
          <MarketListEntry item={item} key={index}/>
        )}
      </div>
    )
  }
}