

// @flow

import React from 'react';
// $FlowFixMe
import styled from 'styled-components';

import createMdParser from '../../src/md-parser';

import TextInput from '../TextInput';
import Card, { CardActions } from '../Card';
import Copy from '../Copy';
import Button from '../Button';
import CardPrimary from '../Card/CardPrimary';
import CardSecondary from '../Card/CardSecondary';

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 32px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  ${({ margin }) => margin && `margin: ${margin};`}
`;


type Props = {
  t: Function,
  elements?: Object,
  components?: Object
};

type State = {
  rawMarkdown: string,
  editing: boolean,
  copied: boolean
};

class Editor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { elements, components } = props;

    this.state = {
      rawMarkdown: '',
      editing: false,
      copied: false
    };

    this.mdParser = createMdParser(elements, components);
  }


  onTextChange = ({ value }: any) => {
    this.setState({ rawMarkdown: value, copied: false });
  };

  onJsonChange = ({ value }: any) => {
    try {
      let parsedValue = JSON.parse(value);

      if (Array.isArray(parsedValue)) parsedValue = parsedValue.join('\n');

      this.setState({ rawMarkdown: parsedValue, copied: false });
    } catch (error) {
      console.log({ error });
    }
  }

  mdParser: Function

  render() {
    const { mdParser } = this;
    const { rawMarkdown, editing, copied } = this.state;

    const placeholder = 'Enter raw text';

    const lines = rawMarkdown.split('\n');
    const value = JSON.stringify((lines.length === 1) ? rawMarkdown : lines, null, 2);

    return (
      <div>
        <Row>
          <Container margin="0px 32px">
            <TextInput
              textArea
              onChange={this.onTextChange}
              value={rawMarkdown}
              placeholder={placeholder}
            />
          </Container>
          <Container margin="0px 32px 0px 0px">
            <Card style={{ flex: 1 }}>
              <CardPrimary>
                <h2>
                  Markdown Preview
                </h2>
              </CardPrimary>
              <CardSecondary>
                <div className="markdown-body">
                  {rawMarkdown
                    ? mdParser(rawMarkdown)
                    : null
                  }
                </div>
              </CardSecondary>
            </Card>
          </Container>
        </Row>
        <Container margin="32px">
          <Card>
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
                  copied={copied}
                  resolvedOnCopy={() => this.setState({ copied: true })}
                />
              )
            }
            <CardActions>
              <Button type="button" onClick={() => this.setState({ editing: !editing })} backgroundColor={editing ? '#006fce' : undefined}>
                edit
              </Button>
            </CardActions>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Editor;
