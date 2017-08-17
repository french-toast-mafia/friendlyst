import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  this.handleOnShare = this.handleOnShare.bind(this)
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

  render() {
    return (
      <div className="newsentry">
        <a href={this.props.newsentry.url} target="_blank">{this.props.newsentry.title}</a>
        <br />
        <button onClick={this.handleOnShare}>Share</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsEntry);
