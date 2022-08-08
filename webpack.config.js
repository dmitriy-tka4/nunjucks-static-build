import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import NunjucksWebpackPlugin from 'nunjucks-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ExtraWatchWebpackPlugin from 'extra-watch-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist', 'assets'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: `./src/views/index.njk`,
          to: `../index.html`, // значение to относительно папки output.path
          context: { isMain: true, asdf: 'Hellooooo main page' }
        },
        {
          from: `./src/views/contacts.njk`,
          to: `../contacts.html`,
          context: { isMain: false, asdf: 'Hellooooo contacts page' }
        },

      ],
      configure: {
        autoescape: true,
        noCache: true
      }
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images', to: './images' }, // значение to относительно папки output.path
        { from: './src/libs', to: './libs' },
      ],
    }),
    new ExtraWatchWebpackPlugin({
      files: [ 'src/**/*.njk' ],
    }),
  ]
};

export default config;
