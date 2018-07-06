import { configure } from '@storybook/react'; // eslint-disable-line
// import stories from '../stories';

function loadStories() {
  require('../stories');
  // You can require as many stories as you need.
}

configure(loadStories, module);
