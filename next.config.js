const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.join(__dirname, 'src/components'),
      '@constants': path.join(__dirname, 'src/constants'),
      '@views': path.join(__dirname, 'src/views'),
      '@styles': path.join(__dirname, 'src/styles'),
      '@utils': path.join(__dirname, 'src/utils'),
      '@public': path.join(__dirname, './public'),
    };

    config.module.rules.push({
      test: /\.s?(c|a)ss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: (fileName, { query }) => query.type || 'scoped',
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /file/,
          loader: 'file-loader',
          options: {
            name: 'static/media/[hash:16].[ext]',
          },
        },
        {
          resourceQuery: /tag/,
          use: [
            { loader: 'babel-loader' },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true,
                svgo: {
                  plugins: [
                    {
                      removeViewBox: false,
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    });

    return config;
  },
}

module.exports = nextConfig
