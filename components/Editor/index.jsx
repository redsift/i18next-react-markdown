

// @flow

import React from 'react';
// $FlowFixMe
import styled from 'styled-components';

import { parser as createMdParser } from '../../src';

import TextInput from '../TextInput';
import Card from '../Card';
import Copy from '../Copy';

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 24px;
`;


type Props = {
  t: Function,
};

type State = {
  rawMarkdown: string,
  editing: boolean
};

class Editor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // const { elements, components } = props;

    this.state = {
      rawMarkdown: '',
      editing: false
    };

    this.mdParser = createMdParser();
  }


  onTextChange = ({ value }: any) => {
    this.setState({ rawMarkdown: value });
  };

  onJsonChange = ({ value }: any) => {
    try {
      let parsedValue = JSON.parse(value);

      if (Array.isArray(parsedValue)) parsedValue = parsedValue.join('\n');

      this.setState({ rawMarkdown: parsedValue });
    } catch (error) {
      console.log({ error });
    }
  }

  mdParser: Function

  render() {
    // const { t } = this.props;
    const { mdParser } = this;
    const { rawMarkdown, editing } = this.state;

    // const placeholder = t('enter-raw-md', { __markdown: false });
    const placeholder = 'Enter raw text';

    const lines = rawMarkdown.split('\n');
    const value = JSON.stringify((lines.length === 1) ? rawMarkdown : lines, null, 2);

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Row>
          <div style={{ flex: 1, margin: 24, marginTop: 0 }}>
            <TextInput
              textArea
              onChange={this.onTextChange}
              value={rawMarkdown}
              placeholder={placeholder}
            />
          </div>
          <div style={{ flex: 1, width: 0 }}>
            <Card style={{ flex: 1 }}>
              {rawMarkdown
                ? mdParser(rawMarkdown)
                : (
                  <h2>
                    Markdown Preview
                  </h2>
                )
              }
            </Card>
          </div>
        </Row>
        <div>
          <Card>
            <div>
              <button type="button" onClick={() => this.setState({ editing: !editing })}>
                edit
              </button>
            </div>
            {editing
              ? (
                <TextInput
                  textArea
                  onChange={this.onJsonChange}
                  value={value}
                />
              )
              : (
                <Copy
                  value={value}
                  singleLine={false}
                />
              )
            }
          </Card>
        </div>
      </div>
    );
  }
}

export default Editor;
