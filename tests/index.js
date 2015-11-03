var stringifile = require('../index');
var fs = require('fs');
var assert = require('assert');

describe('Stringifile', function() {
  var fileName = 'styles.css';
  var tagName = 'style';
  var rawContent = fs.readFileSync(__dirname + '/' + fileName).toString();

  describe('#sync mode', function () {
    it('should return the contents of the file wrapped in xml tags', function () {
      var contents = stringifile(fileName, tagName, __dirname);
      
      assert.equal(contents.indexOf(rawContent) !== -1, true);
      assert.equal(contents.indexOf('<' + tagName + '>') !== -1, true);
      assert.equal(contents.indexOf('</' + tagName + '>') !== -1, true);
    });
  });
  
  describe('#async mode', function () {
    it('should return the contents of the file wrapped in xml tags', function (done) {
      stringifile(fileName, tagName, __dirname, function(err, contents) {
        assert.equal(contents.indexOf(rawContent) !== -1, true);
        assert.equal(contents.indexOf('<' + tagName + '>') !== -1, true);
        assert.equal(contents.indexOf('</' + tagName + '>') !== -1, true);

        done();
      });
    });
  });
});