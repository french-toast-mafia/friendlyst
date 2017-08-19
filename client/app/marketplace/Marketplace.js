import React from 'react';
import MarketList from './MarketList';
import MarketNavBar from './MarketNavBar';
import Nav from '../Nav.jsx';
import axios from 'axios';

export default class MarketPlace extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      itemList: []
    }
  }

  componentDidMount() {
    axios.get('/api/item')
    .then(response => {
      const items = response.data;
      const itemList = this.state.itemList;

      items.forEach(item => {
        itemList.push(item);
      })

      this.setState({ itemList });
      console.log('state is', this.state);
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Nav />  
        <MarketNavBar />
        <MarketList itemList={this.state.itemList} />   
      </div>
    )
  }
}