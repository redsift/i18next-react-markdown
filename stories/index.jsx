import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Editor from '../components/Editor';
// import Button from '../components/Button';

storiesOf('Button', module)
  .add('Editor', () => (
    <Editor onClick={action('clicked')} />
  ));
