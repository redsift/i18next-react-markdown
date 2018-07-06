// @flow

import React from 'react';

import styled from 'styled-components';

type Props = {
  value: string,
  placeholder?: string,
  onChange?: Function
};
type State = {
  value: string,
}

const TextArea = styled.textarea`
  resize: vertical;
  outline: none;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 16px;
  width: 100%;
`;

class TextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event: SyntheticInputEvent<HTMLTextAreaElement>) => {
    const { onChange } = this.props;
    const { value } = event.target;
    this.setState({ value });

    if (onChange) onChange({ value });
  };

  render() {
    const { placeholder, value } = this.props;
    const { value: stateValue } = this.state;

    return (
      <TextArea
        placeholder={placeholder}
        onChange={this.handleChange}
        value={value || stateValue}
      />
    );
  }
}

export default TextInput;
