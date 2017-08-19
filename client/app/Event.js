import React from 'react';

export default class EventEntry extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		console.log('THIS IS A PROP ', this.props);
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-8 event">
						<h2 style={{textDecorationLine: 'underline'}} className="event-title">{this.props.event.name}</h2>
						<h4 className="desc">Who: {this.props.event.group.name}</h4>
						<div className="desc">Link: <a href={this.props.event.link} target="_blank">{this.props.event.link}</a></div>
						<div className="desc">Description: {this.props.event.description}</div>
			    	</div>
			    </div>
			</div>    
		);
	}
}