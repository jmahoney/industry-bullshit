var bullshit = require('./array.js')
module.exports = function(str) {
  var score = 0;
  if (!str || (typeof str !== 'string')) {
    return score;
  }

  for (index in bullshit) {
    if (str.toLowerCase().indexOf(bullshit[index]) > -1) {
      score = score + 1;
    }
  };

  return score;
};
