
/**
 * Expose `align`
 */

module.exports = align;

/**
 * Convert a block of multi-line text into center aligned 
 * 
 * @param {String} text
 * @param {Number} col
 *
 * @return {String}
 */

function align(text, col) {
  
  col = col || 80;

  var out = text.split(/\n/).map(function(line){
      
    var count = line.length;
    var offset;

    if (!count) return;

    offset = Math.floor((col - count) / 2);

    if(offset < 0){
      throw Error('Number of charactors exceeds the number of `col`');
    }

    while(--offset) line = ' ' + line;

    return line;

  });

  return out.join('\n');
}

