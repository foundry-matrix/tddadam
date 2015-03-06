var React = require('react');
var Title = require('./components/title.js')

console.log("title is " + Title);

var Container = React.createClass({
    render: function(){
        <Title/>
    }
});

React.render(<Container/>, document.body);