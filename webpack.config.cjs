const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const config = {
    entry: './src/employees.jsx',

    output: {
      path: path.resolve(__dirname, 'public'),
      filename: isProduction ? 'employees.bundle.js' : 'employees.bundle.js',
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'all',
      },
    },
    
    devtool: 'source-map',
  };

  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }

  return config;
};