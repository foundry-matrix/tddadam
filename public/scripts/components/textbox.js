var React = require('react');
	
	var TextBox = React.createClass({
		render: function() {
			return (
				<div className="indivnote">
					<input type="text" className="titles" onChange={this.props.update} placeholder={this.props.title}></input>
					<div/>
					<textarea className="textbox" onChange={this.props.update}>{this.props.text}</textarea>
					<div/>
					<button onClick={this.props.deletenote}>Delete Note</button>
				</div>
			)
		}
	});


module.exports = TextBox;
