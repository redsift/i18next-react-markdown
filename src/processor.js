// @flow
import parseMd from './md-parser';
import type { ParseParams } from './md-parser';

type Options = {
  __markdown: ?boolean,
};

const markdownProcessor = (parser?: ParseParams = parseMd()) => ({
  type: 'postProcessor',
  name: 'react-markdown',
  process(value: string, key: string, options: Options) {
    if (!key.endsWith('_md')) return value;

    return options.__markdown === false // eslint-disable-line
      ? value // Raw string
      : parser(value); // React component(s)
  }
});

export default markdownProcessor;
