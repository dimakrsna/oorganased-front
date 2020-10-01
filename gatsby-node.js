/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g)$/i,
          use: [
          'file-loader',
          {
              loader: 'image-webpack-loader',
              options: {
                  bypassOnDebug: true,
                  emitFile: false
              },
          },
          ],
      },
      ],
    },
    plugins: [],
  })
}