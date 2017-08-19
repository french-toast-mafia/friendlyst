import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import ViewItem from './ViewItem'

export default class MarketListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elapsedTime: '',
      modal: false
    }
    // this.onOpen = this.onOpen.bind(this);
    // this.onClose = this.onClose.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount() {
    console.log('entry props are', this.props.item)
    const elapsedTime = moment(this.props.item.createdAt).fromNow();
    this.setState({ elapsedTime })
  }

  toggleModal() {
    let modal = !this.state.modal
    this.setState({ modal });
  }

  render() {
    var overlay = this.state.modal ? <ViewItem  item={this.props.item} toggleModal={this.toggleModal} /> : null;

    return (
      <div style={{'cursor':'pointer'}} className="marketListEntryContainer" onClick={this.toggleModal}>
        { overlay } 
        <img src={this.props.item.img} width="200" height="200" />
        <div className="marketListEntryInfo">
          <p>{this.props.item.title}</p>
          <p>{this.props.item.price}</p>
          <p>{this.props.item.location} - {this.state.elapsedTime}</p>
        </div>
      </div>
    )
  }
}