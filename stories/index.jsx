import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Editor from '../components/Editor';

storiesOf('Markdown', module)
  .add('Editor', () => (
    <Editor onClick={action('clicked')} />
  ));
