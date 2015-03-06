	var React = require('react');


	var Header = React.createClass({
		render: function(){
			return (
				<div className="header">
					<h1>NOTE TAKER</h1>
					<button onClick={this.props.addnote}>Add Note</button>
				</div>
			)
		}

	});

module.exports = Header;

/*var React = require('react');

var Title = React.createClass({
    render: function(){
        return (
                <input type="text" className="title-input"> 'ello from title' </input> 
            );
    	}
});




module.exports = Title;*/