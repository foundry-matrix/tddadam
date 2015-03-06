var React = require('react');


var Title = React.createClass({
    render: function(){
        console.log("about to render");
        return (
                <textarea className="title-input"> 'cheese' </textarea> 
            );
    }

    
});



React.render(<Title/>, document.body);

module.exports = {
    Title: Title
};