// @flow

import { createElement as reactCreateElement } from 'react';
// $FlowFixMe
import marksy from 'marksy/components';

import type { Node as ReactNode } from 'react';

export type Attributes = {
  id?: string,
  children?: ReactNode,
  className?: string
};

type FuncObj = { [string]: Attributes => ReactNode };

export type ParseParams =
  (string | void, FuncObj | void, FuncObj | void, Object | void, Object | void, any) => ReactNode;

const createParser = (
  elements?: FuncObj,
  components?: FuncObj,
  marksyOptions?: Object,
  markedOptions?: Object = { breaks: true },
  createElement?: any = reactCreateElement
) => {
  const m = marksy({
    /* Virtual DOM lib element creator */
    createElement,

    /* HTML element and React component overrides */
    elements,
    components,
    ...marksyOptions
  });

  return (text?: string = '', markedOverride?: Object = { breaks: true }): ReactNode => m(text, markedOverride || markedOptions).tree;
};

export default createParser;
