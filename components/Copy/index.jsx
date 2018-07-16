// @flow

import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

import Button from '../Button';

const CodeContainer = styled.div`
  padding: 16px;
  overflow: auto;
  background-color: #f6f8fa;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  flex-direction: column;
`;

const InfoText = styled.span`
  margin-top: 4px;
  font-size: 12px;
  color: blue;
`;

const EmojiContainer = styled.div`
  position: relative;
  right: -2px;
  font-size: 1rem;
`;

const Copy = (
  { value, resolvedOnCopy, copied }: { value: string, resolvedOnCopy?: Function, copied?: boolean }
) => (
  <div>
    <CodeContainer>
      <CopyToClipboard
        text={value}
        onCopy={resolvedOnCopy || undefined}
      >
        <Column>
          <Button height="24px" type="button" backgroundColor={copied ? '#006fce' : undefined}>
            <EmojiContainer>
              <span role="img" aria-label="Copy" title="Copy">
                📋
              </span>
            </EmojiContainer>
          </Button>
          {copied && (
            <InfoText>
              Copied
            </InfoText>
          )}
        </Column>
      </CopyToClipboard>
      <pre>
        <code>
          {value}
        </code>
      </pre>
    </CodeContainer>
  </div>
);

export default Copy;
