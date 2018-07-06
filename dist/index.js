'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parser = undefined;

var _mdParser = require('./md-parser');

var _mdParser2 = _interopRequireDefault(_mdParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markdownProcessor = function markdownProcessor() {
  var parser = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parser;
  return {
    type: 'postProcessor',
    name: 'react-markdown',
    process: function process(value, key, options) {
      return options.__markdown === false ? value // Raw string
      : parser(value); // React component(s)
    }
  };
};
exports.parser = _mdParser2.default;
exports.default = markdownProcessor;