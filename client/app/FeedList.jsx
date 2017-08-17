import React, { Component } from 'react'
import FeedListEntry from './FeedListEntry.jsx'

class FeedList extends Component {
  render() {
    return(
    <div>
      <div>
        {this.props.posts.sort( (a,b) => {
				a = a.updatedAt;
				b = b.updatedAt;
				return a > b ? -1 : a < b ? 1 : 0;
			}).map((post, key) => {
          return <FeedListEntry post={post} key={post.id} user={this.props.user} />
        }
      )}
      </div>
    </div>
  )}
}

export default FeedList