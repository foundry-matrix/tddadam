jest.dontMock('../public/scripts/main.js');

var React = require('react/addons'),
    main = require('../public/scripts/main.js'),
    TestUtils = React.addons.TestUtils;

describe('Main js test', function() {

  describe('TestMe function', function(){
    it('TestMe will add 2 numbers', function(){
      expect(main.testMe(2,2)).toEqual(4);
    });
  });
});