// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = getChildrenByClassName(className, document.body);
  return result;
};

var getChildrenByClassName = function(className, parent) {
  var result = [];
  if (parent.classList && parent.classList.contains(className)) { result.push(parent); }
  var children = parent.childNodes;
  if (!children) { return result; }
  for (var i = 0; i < children.length; ++i) {
    var child = children[i];
    result = result.concat(getChildrenByClassName(className, child));
  }
  return result;
};