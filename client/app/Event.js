import React from 'react';

export default class EventEntry extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			description: ''
		}

	}

	componentDidMount(){
		if (this.props.event.description){
			//console.log('THIS IS DESC: ', this.props.event.description);
			var regex = /(<([^>]+)>)/ig;
			var body = this.props.event.description;
			var result = body.replace(regex, "");
			console.log('RESULT W/ REGEX', result);

			this.setState({description: result});
			console.log('THIS IS STATE DESC: ', this.state.description);
		}
	}

	render(){
		console.log('This is a prop: ', this.props);
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-8 event">
						<h4 className="desc">{this.props.event.group.name}</h4>
						<h2 style={{textDecorationLine: 'underline'}} className="event-title">{this.props.event.name}</h2>
						<div className="desc">Link: <a href={this.props.event.link} target="_blank">{this.props.event.link}</a></div>
						<div className="desc">Description: {this.state.description}</div>
			    	</div>
			    </div>
			</div>    
		);
	}
}