import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

const Code = styled.code`
  white-space: pre-wrap;
`;

const Copy = ({ value, resolvedOnCopy }) => (
  <div>
    <CopyToClipboard
      text={value}
      onCopy={resolvedOnCopy || undefined}
    >
      <button type="button">
        copy
      </button>
    </CopyToClipboard>
    <div title={value}>
      <Code>
        {value}
      </Code>
    </div>
  </div>
);

export default Copy;
