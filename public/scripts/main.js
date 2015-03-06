var React = require('react');
var Header = require('./components/header.js');
var TextBox = require('./components/textbox.js');

	var data = [
		{id: 1, title: "shopping", text: "note1"},
		{id: 2, title: "to do", text: "note2"},
		{id: 3, title: "jobs", text: "note3"},
		{id: 4, title: "coding", text: "note4"},
		{id: 5, title: "cars", text: "note5"}
	];

	var Main = React.createClass({
	    getInitialState: function() {
	        return {
	            data: this.props.data.splice(0)
	        }
	    },
		addnote: function() {
			newobject = {
				id: this.state.data.length + 1,
				title: "title",
				text: "text"
			}

			this.state.data.push(newobject);

			this.setState({
                data: this.state.data
            }) 
		},
	    deletenote: function (note) {
	        this.state.data.splice(this.state.data.indexOf(note), 1);

	        this.setState({
	        	data: this.state.data
	        });
	    },
	    update: function (name, e) {
	    	console.log("updating");
	    },
		render: function() {
			that = this;
	        return (
	            <div>
	            <Header addnote={that.addnote} />
	                {this.state.data.map(function (note) {
	                    return (
	                        <TextBox update={that.update} deletenote={that.deletenote.bind(null, note)} title={note.title} text={note.text} />
	                    )
	                })
	            }
	            </div>
	        )
		}
	});

/*
	var Header = React.createClass({
		render: function(){
			return (
				<div className="header">
					<h1>NOTE TAKER</h1>
					<button onClick={this.props.addnote}>Add Note</button>
				</div>
			)
		}

	})
*/

/*
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
*/

React.render(<Main data={data}/>,document.getElementById("content"));





	var NotesList = React.createClass({

	    getInitialState: function(){
	        return { searchString: '' };
	    },

	    handleChange: function(e){
	        this.setState({searchString:e.target.value});
	    },

	    render: function() {

	        var data = this.props.data;
	        var searchString = this.state.searchString.trim().toLowerCase();


	        if(searchString.length > 0){

	            data = data.filter(function(l){
	                return l.name.toLowerCase().match( searchString );
	            });

	        }

	        return (
		        <div>
		            <input type="text" className="search" value={this.state.searchString} onChange={this.handleChange} placeholder="Search Notes" />
		            <ul>
		                { data.map(function(l){
		                    return <li>{l.title} <a href={l.text}>{l.text}</a></li>
		                }) }
		            </ul>
		        </div>
		    )
	    }
	});
                                                   
	React.render(<NotesList data={data}/>,document.getElementById("sidebar"));