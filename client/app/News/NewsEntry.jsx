import React, { Component } from 'react';
import { connect } from 'react-redux';
import HoverDiv from './HoverDiv.jsx';
import axios from 'axios';

const mapStateToProps = (state) => {
	return {
    posts: state.postsReducer.posts,
    user: state.userReducer.user,
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
		newPost(post) {
			dispatch({
				type: 'NEW_POST',
				payload: post
			})
    }
  }
}

class NewsEntry extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false
    }

  this.handleOnShare = this.handleOnShare.bind(this)
  this.handleMouseEnter = this.handleMouseEnter.bind(this)
  this.handleMouseExit = this.handleMouseExit.bind(this)
  }

  handleOnShare(){
    axios.post('api/post/postPost', {
			email: this.props.user.email,
			message: this.props.newsentry.url,
		})
			.then(({ data }) => {
				this.props.newPost(data);
			})
			.catch(err => {
				console.log(err);
			})
  }

  handleMouseEnter(){
    this.setState({
      show: !this.state.show
    })
  }
  
  handleMouseExit(){
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="newsentry">
        <a href={this.props.newsentry.url} target="_blank" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>{this.props.newsentry.title}</a>
        {this.state.show ? <HoverDiv newsentry={this.props.newsentry}/> : null}
        <br />
        <button onClick={this.handleOnShare} className="sharebutton"><i className="fa fa-share"></i></button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsEntry);
