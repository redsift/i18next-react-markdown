import { configure } from '@storybook/react'; // eslint-disable-line

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
