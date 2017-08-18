import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'

export default class ViewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elapsedTime: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const elapsedTime = moment(this.props.item.createdAt).fromNow();
    this.setState({ elapsedTime })
  }

  handleClick() {
    console.log('handleClick invoked!')
  }

  render() {
    return (
      <div className="viewItem">
        {/* <img src={this.props.item.img} width="200" height="200" />
        <div className="marketListEntryInfo">
          <p>{this.props.item.title}</p>
          <p>{this.props.item.price}</p>
          <p>{this.props.item.location} - {this.state.elapsedTime}</p>
        </div> */}
      </div>
    )
  }
}