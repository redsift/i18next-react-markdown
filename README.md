# i18next-react-markdown

Embed React elements using markdown in i18next translation strings.

This wraps `marksy` with an HTML element and React component config import util.

## Getting Started

### Install and Build

```sh
npm install
```

### Storybook

#### Run local storybook

```sh
npm start
```

#### Build storybook

```sh
npm run storybook
```

> outputs static storybook site to `docs/`

## Usage

This can be used in your own project and elements can be overriden with custom React components.

### i18next processor initialisation

```js
import mdProcessor, { parser as mdParser } from 'i18next-react-markdown';

const elements = {
  h1({ id, children }: Attributes) {
    return (
      <h1 id={id}>
        {children}
      </h1>
    );
  },
}

const components = {
  Card({ children }: Attributes) {
    return (
      <div class="card">
        {children}
      </div>
    );
  },
}

const mdProcessor = createProcessor({
  elements,
  components,
  marksyOptions: {} // additional marksy input after elements and components
  markedOptions: {}
});

i18n
  .use(mdProcessor)
  .init({
    // ...
    postProcess: ['react-markdown'],
    // ...
  })
```

## Editor usage

```js
return (
  <Editor elements={elements} components={components} />
)
```

## Markdown parser usage

```js
import { parser as createMdParser } from 'i18next-react-markdown';


const mdParse = createMdParser(elements, components);
```
