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
    // console.log('this is the evnets', e)
    // let type = e.target.name
    // console.log('this is the type', type)
    axios.get(`https://newsapi.org/v1/articles?source=${e}&sortBy=top&apiKey=${apiKey}`)
      .then(({data}) => {
        this.props.newNews(data.articles)
      })
  }

  render() {
    return (
      <div className="news-nav" >
        Trending News
        {/* <img src='./001-star' onClick={(e) => {this.handleOnClick('buzzfeed')}} /> */}
        <button name="buzzfeed" onClick={(e) => {this.handleOnClick('buzzfeed')}} className="icon-button"><i className="fa fa-line-chart"></i></button>
        <button name="espn" onClick={(e) => {this.handleOnClick('espn')}} className="icon-button"><i className="fa fa-futbol-o"></i></button>
        <button name="the-economist" onClick={(e) => {this.handleOnClick('the-economist')}} className="icon-button"><i className="fa fa-university"></i></button>
        <button name="entertainment-weekly" onClick={(e) => {this.handleOnClick('entertainment-weekly')}} className="icon-button"><i className="fa fa-star"></i></button>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
