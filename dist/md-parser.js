'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _components = require('marksy/components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createParser = function createParser(elements, components, marksyOptions) {
  var markedOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { breaks: true };
  var createElement = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _react.createElement;

  var m = (0, _components2.default)((0, _extends3.default)({
    /* Virtual DOM lib element creator */
    createElement: createElement,

    /* HTML element and React component overrides */
    elements: elements,
    components: components
  }, marksyOptions));

  return function () {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var markedOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { breaks: true };
    return m(text, markedOverride || markedOptions).tree;
  };
};

exports.default = createParser;