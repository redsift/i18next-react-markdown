

// @flow

import React from 'react';
import { parser as markdown } from '../../src';

import TextInput from '../../components/TextInput';
import Card from '../../components/Card';
import Copy from '../../components/Copy';

type Props = {
  t: Function,
};

type State = {
  rawMarkdown: string,
};

class Editor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      rawMarkdown: ''
    };
  }

  onTextChange = ({ value }: { value: string }) => {
    this.setState({ rawMarkdown: value });
  };

  render() {
    // const { t } = this.props;
    const { rawMarkdown } = this.state;

    // const placeholder = t('enter-raw-md', { __markdown: false });
    const placeholder = 'Enter raw text';

    const lines = rawMarkdown.split('\n');
    const value = JSON.stringify((lines.length === 1) ? rawMarkdown : lines, null, 2);

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 24,
          }}
        >
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
              {markdown(rawMarkdown)}
            </Card>
          </div>
        </div>
        <div>
          <Copy
            value={value}
            singleLine={false}
          />
        </div>
      </div>
    );
  }
}

export default Editor;
