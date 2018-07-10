// @flow

import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

const Code = styled.pre`
  padding: 16px;
  overflow: auto;
  background-color: #f6f8fa;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 3px;
  padding: 2px 0px 2px 4px;
  margin-right: 16px;
  border: 1px solid gray;
`;

const Copy = ({ value, resolvedOnCopy }: { value: string, resolvedOnCopy?: Function }) => (
  <div>
    <div title={value}>
      <Code>
        <CopyToClipboard
          text={value}
          onCopy={resolvedOnCopy || undefined}
        >
          <Button type="button">
            <span role="img" aria-label="Copy" title="Copy">
              📋
            </span>
          </Button>
        </CopyToClipboard>
        <code>
          {value}
        </code>
      </Code>
    </div>
  </div>
);

export default Copy;
