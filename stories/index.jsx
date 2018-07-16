import React from 'react';
import { storiesOf } from '@storybook/react';
import Editor from '../components/Editor';

storiesOf('Markdown', module)
  .add('Editor', () => (
    <Editor />
  ));
