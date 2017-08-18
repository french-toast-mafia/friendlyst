import React, { Component } from 'react'
import Nav from './Nav.jsx'
import { connect } from 'react-redux';
import ProfileFeedListEntry from './ProfileFeedListEntry.jsx';
import FeedListEntry from './FeedListEntry.jsx';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    user: state.userReducer.user
  }
};

const mapDispatchToProps = (dispatch) => {
	return {
		newUser(post) {
			dispatch({
				type: 'NEW_POST',
				payload: post
      })
    }
  }
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.changePicture = this.changePicture.bind(this);
  }

  changePicture() {
    let newPic = prompt('Please provide a new picture url.');
    axios.put(`api/user/changePic`, {
      newPic,
      userId: this.props.user.id
    })
      .then(({ data }) => newUser(data))
      .catch(err => console.log(err))   
  }

  render() {
    {console.log(this.props)}
    return (
      <div className="profile-container">
        <div className="navcopy">
          <Nav />
        </div>
        <div className="profile-info">
          <div><img src={this.props.user.profilePicture} /></div>
          <br/>
          <Button bsStyle="default" onClick={this.changePicture}>Change Profile Picture</Button>
          <div>Username: {this.props.user.nickname}</div>
          <div>Email: {this.props.user.email}</div>
        </div>
         <div>
           {
             this.props.posts
              .filter(post => post.userId === this.props.user.id)
              .sort((a, b) => b.id - a.id)
              .map(post => {
                return <FeedListEntry key={post.id} post={post} user={this.props.user}/>
              })
           }
        </div> 
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);