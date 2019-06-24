/** eslint-disable */
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          alias: {
            src: './src',
            actions: './src/actions',
            components: './src/components',
            constants: './src/constants',
            containers: './src/containers',
            reducers: './src/reducers',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
