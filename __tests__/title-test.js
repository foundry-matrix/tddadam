jest.dontMock('../public/scripts/components/title.js');    //tell it not to mock what u want to test

var React = require('react/addons'),      // get access to React 
    Title = require('../public/scripts/components/title.js'),   // put your function that you want to test into a var 
    TestUtils = React.addons.TestUtils;     // access test utilties 


describe('Title', function(){
  	var Title = TestUtils.renderIntoDocument(<Title/>);
	var titleInput = TestUtils.scryRenderedDOMComponentsWithClass(Title, 'title-input');

	it ('a title input field is rendered', function(){
	  	expect(Title.render).toBeDefined();
	});
});