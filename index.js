var fs = require('fs');

/**
 * Returns the content of a file wrapped in xml tags.
 *
 * @module Stringifile
 * @param {String} fileName - Name of the file
 * @param {String} tag - Tag name
 * @param {String} [dir] - Directory to find the file
 * @param {Function} [cb] - Callback
 *
 * @example 
 *   //Sync mode:
 *   var styles = stringifile('app.css', 'style', 'public/assets')
 *
 *   //Async mode:
 *   stringifile('app.css', 'style', 'public/assets', function(error, contents) {
 *     var styles = contents;
 *   });
 *   
 * @return {String}         
 */
module.exports = function(fileName, tag, dir, cb) {
  dir = dir || '.';
  
  var uri = [dir, fileName].join('/');

  if (!cb) {
    var contents = fs.readFileSync(uri).toString();

    return wrapFile(contents, tag);
  }
  
  fs.readFile(uri, function(err, data) {
    cb(err, wrapFile(data.toString(), tag))
  });
};

function wrapFile(content, tag) {
  return ['<', tag, '>', content, '</', tag, '>'].join('');  
}