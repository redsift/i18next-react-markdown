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

var parse = function parse() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var elements = arguments[1];
  var components = arguments[2];
  var markedOptions = arguments[3];
  var marksyOptions = arguments[4];
  var createElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _react.createElement;

  var _marksy = (0, _components2.default)((0, _extends3.default)({
    /* Virtual DOM lib element creator */
    createElement: createElement,

    /* HTML element and React component overrides */
    elements: elements,
    components: components
  }, marksyOptions))(text, markedOptions),
      tree = _marksy.tree;

  return tree;
};

exports.default = parse;