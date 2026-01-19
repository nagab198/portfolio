module.exports = {
  siteMetadata: {
    title: `Nagababu Medisetti | Senior Software Developer`,
    description: `Portfolio of Nagababu Medisetti, a Senior Software Developer with 5+ years of experience in React, Vue.js, Next.js, AWS, and cloud technologies.`,
    author: `@nagababu`,
    siteUrl: `https://nagababu.medisetti.in`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nagababu Medisetti Portfolio`,
        short_name: `NM Portfolio`,
        start_url: `/`,
        background_color: `#0a0a0f`,
        theme_color: `#6366f1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
        excludes: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => 'https://nagababu.medisetti.in',
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: 'weekly',
            priority: path === '/' ? 1.0 : 0.8,
          }
        },
      },
    },
  ],
}
