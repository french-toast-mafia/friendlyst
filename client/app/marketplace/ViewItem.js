import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'

export default class ViewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elapsedTime: ''
    }
    this.onClose = this.onClose.bind(this)
  }

  componentDidMount() {
    const elapsedTime = moment(this.props.item.createdAt).fromNow();
    this.setState({ elapsedTime })
  }

  onClose() {
    this.props.toggleModal()
  }

  render() {
    return (

      <div className="overlay">
        <div className="modalContainer">
          <img className="modalImage" src={this.props.item.img} />
          <div className="modalInfo">
            <span className="close">&times;</span>
            <p>{this.props.item.title}</p>
            <span className="modalPrice">{this.props.item.price}</span>
            <p className="modalDescription">{this.props.item.description}</p>
            <span className="modalLocation">{this.props.item.location} - {this.state.elapsedTime}</span>
          </div>
        </div>
      </div>
    )
  }
}