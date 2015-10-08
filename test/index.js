var test = require('tape');
var bullshit = require('../index.js');

test('array', function(t){
  t.plan(2);
  t.ok(bullshit.array, 'has an array property');
  t.ok(bullshit.array.length > 0, 'has content in the array of bullshit');
});

test('score', function(t) {
  t.plan(4);
  t.equal(bullshit.score(), 0);
  t.equal(bullshit.score(""), 0);
  t.equal(bullshit.score('going forward'), 1);
  t.equal(bullshit.score('concentrating the cross platform internet of things going forward'), 3);
});
