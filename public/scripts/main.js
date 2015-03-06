var React = require('react');


var Title = React.createClass({
    render: function(){
        console.log("about to render");
        return (
                <input type="text" className="title-input"> 'asdf' </input> 
            );

    }
    
});

React.render(<Title/>, document.body);



// module.exports = {
//     Title: Title
// };