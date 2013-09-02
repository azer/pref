var pref = require("./");

it('saves given value to localstorage', function(){
  pref('foo', true);
  expect(localStorage['pref-foo']).to.equal('true');
});

it('parses values as JSON before returning', function(){
  pref('foo', 123);
  expect(pref('foo')).to.equal(123);
  pref('foo', true);
  pref('bar', { qux: 123, quux: 456 });
  expect(pref('bar')).to.deep.equal({ qux: 123, quux: 456 });
  expect(pref('foo')).to.be.true;
  pref('foo', false);
  expect(pref('foo')).to.be.false;
});
