// @flow

import { createElement as reactCreateElement } from 'react';
import marksy from 'marksy/components';

import type { Node as ReactNode } from 'react';

export type Attributes = {
  id?: string,
  children?: ReactNode,
};

type FuncObj = { [string]: Attributes => ReactNode };

export type ParseParams =
  (string | void, FuncObj | void, FuncObj | void, Object | void, Object | void, any) => ReactNode;

const parse = (
  text?: string = '',
  elements?: FuncObj,
  components?: FuncObj,
  markedOptions?: Object,
  marksyOptions?: Object,
  createElement?: any = reactCreateElement
): ReactNode => {
  const { tree } = marksy({
    /* Virtual DOM lib element creator */
    createElement,

    /* HTML element and React component overrides */
    elements,
    components,
    ...marksyOptions
  })(text, markedOptions);

  return tree;
};

export default parse;
