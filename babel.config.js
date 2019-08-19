module.exports = {
  'presets': [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      targets: {
        ie: '11',
      },
      corejs: 3,
    }],
    '@babel/preset-react',
  ],
  'plugins': [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
  ],
  'env': {
    'test': {
      'presets': [
        ['@babel/preset-env', {
          useBuiltIns: 'usage',
          targets: {
            node: 'current',
          },
          corejs: 3,
        }],
        '@babel/preset-react',
      ],
      'plugins': [
        '@babel/plugin-proposal-class-properties',
        'babel-plugin-dynamic-import-node',
        ['@babel/plugin-transform-runtime', { corejs: 3 }],
      ],
    },
  },
};