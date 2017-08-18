import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import FriendProfile from './FriendProfile.jsx'
import FriendProfileRoute from './FriendProfileRoute.jsx'
import Profile from './Profile.jsx'
import NotFriendProfile from './NotFriendProfile.jsx'
import NotUserProfile from './NotUserProfile.jsx'
import News from './News/News.jsx'
import postsReducer from './reducer/postReducer.js'
import friendsReducer from './reducer/friendsReducer.js'
import userReducer from './reducer/userReducer.js'
import friendinfoReducer from './reducer/friendinfoReducer.js'
import friendReducer from './reducer/friendReducer.js'
import chatRoomReducer from './reducer/chatRoomReducer.js'
import commentReducer from './reducer/commentReducer.js'
import newsReducer from './reducer/newsReducer.js'
import socketReducer from './reducer/socketReducer.js'
import Marketplace from './marketplace/Marketplace.js'
import AddItem from './marketplace/AddItem.js'
import $ from 'jquery';


const reducers = combineReducers({
   postsReducer,
   friendsReducer,
   userReducer,
   chatRoomReducer,
   friendReducer,
   friendinfoReducer,
   commentReducer,
   socketReducer,
   newsReducer
})

const store = createStore(reducers)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={App} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/notuser" component={NotUserProfile} />
        <Route exact path="/notfriend" component={NotFriendProfile} />
        <Route exact path="/friendprofile" component={FriendProfile} />
        <Route exact path="/news" component={News} />
        <Route exact path="/marketplace" component={Marketplace}/>
        <Route exact path="/additem" component={AddItem}/>
        <Route exact path="/*" component={FriendProfileRoute} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'));
