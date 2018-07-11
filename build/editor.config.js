const path = require('path');

const cwd = process.cwd();

module.exports = {
  input: './Editor',
  output: {
    file: 'dist/editor.js',
    name: 'MarkdownEditor'
  },
  pluginConfigs: {
    babel: {
      presets: [
        'flow',
        'react',
        // NOTE: Resolving 'env' in Babel 6 does not always work
        // in Babel 7 (see https://github.com/babel/babel-preset-env/issues/186#issuecomment-297776368). Meanwhile
        [path.join(cwd, 'node_modules', 'babel-preset-env'),
          {
            modules: false
          }
        ]
      ],
      plugins: [
        'external-helpers',
        'transform-object-rest-spread',
        'transform-runtime',
        'transform-class-properties'
      ],
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      babelrc: false
    },
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.json'],
      jsnext: true
    },
    commonjs: {
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType'],
        'node_modules/react-copy-to-clipboard/lib/index.js': ['CopyToClipboard']
      }
    }
  },
  external: ['react', 'marksy/components']
};
