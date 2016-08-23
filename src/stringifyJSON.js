// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(val) {
  var result = '';
  switch (typeof val) {
    case 'number': result += stringifyNumber(val); break;
    case 'boolean': result += stringifyBoolean(val); break;
    case 'string': result += stringifyString(val); break;
    case 'object': Array.isArray(val) 
      ? result += stringifyArray(val) : result += stringifyObject(val); break;
    default: result += 'null';
  }
  return result;
};

var stringifyObject = function(obj) {
  if (obj === null) { return 'null'; }
  var result = '{';
  for (var key in obj) {
    var type = typeof obj[key];
    if (type === 'function' || type === 'undefined') { continue; }
    if (result !== '{') { result += ','; }
    result += stringifyString(key) + ':' + stringifyJSON(obj[key]);
  }
  result += '}';
  return result;
};

var stringifyNumber = function(num) {
  return num.toString();
};

var stringifyBoolean = function(bool) {
  return bool.toString();
};

var stringifyString = function(str) {
  return '"' + str + '"';
};

var stringifyArray = function(arr) {
  var result = '[';
  arr.forEach(function(val) {
    if (result !== '[') { result += ','; }
    result += stringifyJSON(val);
  });
  result += ']';
  return result;
};