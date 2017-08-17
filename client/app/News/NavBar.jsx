import React, { Component } from 'react';
import NewsList from './NewsList.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import {apiKey} from '../../../apiKey';

const mapStateToProps = (state) => {
	return {
		news: state.newsReducer.news,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		newNews(news) {
			dispatch({
				type: 'ADD_NEWS',
				payload: news
			})
		}
  }
}

class NavBar extends Component {
  constructor(){
    super()

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e){
    let type = e.target.name
    axios.get(`https://newsapi.org/v1/articles?source=${type}&sortBy=top&apiKey=${apiKey}`)
      .then(({data}) => {
        this.props.newNews(data.articles)
      })
  }

  render() {
    return (
      <div>
        Trending News
        <button name="buzzfeed" onClick={this.handleOnClick}>Top Trends</button>
        <button name="espn" onClick={this.handleOnClick}>Sports</button>
        <button name="the-economist" onClick={this.handleOnClick}>Business</button>
        <button name="entertainment-weekly" onClick={this.handleOnClick}>Entertainment</button>
        <br/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
