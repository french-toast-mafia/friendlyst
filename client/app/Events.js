import React from 'react';
import Nav from './Nav.jsx';
import axios from 'axios';
import EventEntry from './EventEntry';

export default class Event extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			input: '',
			events: [],
            searching: false
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//componentDidMount(){}

	handleInputChange(event){
		event.preventDefault();
        this.setState({input: event.target.value}, () => {
            console.log('This is the state of input: ', this.state.input);
        })
	}

	handleSubmit(event){
		event.preventDefault();
        this.setState({input: this.state.input});
        console.log('This is the input: ', this.state.input);
        if (this.state.searching === false){
            this.setState({searching: true});
        }
        axios.get('/test/getEvents', {
            params: {
                input: this.state.input
            }
        })
        	.then(data => {
        		console.log('THIS IS DATA', data.data.data);
                this.setState({events: data.data.data});
        	})
        	.catch(err => {
        		console.log('This is the ERRRRRROR ', err);
        	})
	}

    renderEvents(){
        if (this.state.searching){
            return (
                <div>
                    <EventEntry events={this.state.events} />
                </div>        
            ); 
        }
    }

	render() {
    return (
      <div className="profile-container">
        <div className="navcopy">
          <Nav />
        </div>
        <div className=" container events">
        	<h2>Events</h2>
        </div>
        <div className="container">
        	<form>
        		<input onChange={this.handleInputChange} type="text" className="input-md my-input" placeholder="Search events by keyword" />
                <input onClick={this.handleSubmit} className="button" id="upload-button" type="submit" value="Search" />
        	</form>
            {this.renderEvents()}
        </div>
      </div>
    )
  }
}