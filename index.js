module.exports = pref;

function get (key) {
  if (!localStorage.hasOwnProperty('pref-' + key)) return;
  return JSON.parse(localStorage['pref-' + key]);
}

function set (key, value) {
  localStorage['pref-' + key] = JSON.stringify(value);
}

function pref () {
  var fn;
  if (arguments.length == 1) fn = get;
  else if (arguments.length == 2) fn = set;

  if (fn) return fn.apply(undefined, arguments);
}

