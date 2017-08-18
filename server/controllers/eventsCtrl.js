const axios = require ('axios');
const circularJSON = require('circular-json');

module.exports = {
	getEvents: ((req, res) => {
		console.log('test');
		let param = req.query.input;
		console.log(param);
		axios.get('https://api.meetup.com/find/events?key=7336411f7e37471b7b45414131bb3&sign=true&photo-host=public&text=' + param)
			.then(data => {
				console.log('RETURNED DATA ', data);
				res.send(circularJSON.stringify(data));
			})
			.catch(err => {
				console.log(err);
				res.send(err);
			})
	})
}