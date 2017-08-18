import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import NewsList from './NewsList.jsx';
import { connect } from 'react-redux';
import axios from 'axios';
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

class News extends Component {
  constructor() {
    super()

  }
  componentWillMount() {
    axios.get(`https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=${apiKey}`)
    .then(({data}) => {
      this.props.newNews(data.articles)
    })
  }

  render() {
    return (
      <div className="news-box">
        <NavBar />
        <NewsList news={this.props.news}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
