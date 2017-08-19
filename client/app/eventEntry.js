import React from 'react';
import Event from './Event';

export default class EventEntry extends React.Component{
	constructor(){
		super();
	}

	render(){
		console.log(this.props);
		return (
			<div className="row">
		        {this.props.events.map((event, i) => 
		            (<Event event={event} key={i}/>)
		        )}
		    </div>
		);
	}
}