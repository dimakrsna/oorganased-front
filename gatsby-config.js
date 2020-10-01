module.exports = {
  siteMetadata: {
    title: `Oorganized`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:500,700`,
          `Open Sans\:400`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: 'AIzaSyAbWgvgO3se9er8UMGM8fCzUhLPpnMSuC0',
          authDomain: 'oorganised.firebaseapp.com',
          databaseURL: 'https://oorganised.firebaseio.com',
          projectId: 'oorganised',
          storageBucket: 'oorganised.appspot.com',
          messagingSenderId: '722705842818',
          appId: '1:722705842818:web:b65b821be0c18dfa',
          // measurementId: 'G-L05PL6YZQP',
        }
      }
    }
    // @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap')
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
