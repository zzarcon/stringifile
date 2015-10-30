var fs = require('fs');

/**
 * Returns the content of a file wrapped in xml tags
 * 
 * @param {String} fileName - Name of the file
 * @param {String} tag - Tag name
 * @param {String} [dir] - Directory to find the file
 * 
 * @return {String}         
 */
module.exports = function(fileName, tag, dir) {
  dir = dir || '.';
  
  var uri = [dir, fileName].join('/');
  var contents = fs.readFileSync(uri).toString();

  return ['<', tag, '>', contents, '</', tag, '>'].join('');
};