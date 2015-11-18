var React = require('react');
var Firebase = require('firebase');

var fbRef = new Firebase("https://<firebase-server>.firebaseio.com/");

var Hello = React.createClass({
	render: function () {
		return <h1>Hello Esc Esc</h1>
	}
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));
