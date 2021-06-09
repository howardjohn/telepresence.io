module.exports = {
  siteMetadata: {
    title: "Telepresence",
  },
  plugins: [

    // We have a bunch of documentation subtree'd in at ./docs/
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs/`,
      },
    },
    // Plugins adding support for additional filetypes in ./docs/
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.md`],
      },
    },
    {
      resolve: 'gatsby-plugin-less',
    },
    // Plugins adding support for additional filetypes in ./src/assets/
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-sanity',
        options: {
          projectId: 'e3vd3ukt',
          dataset: 'production',
        },
    },
    // We have some fancy page metadata
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'frontmatter-schema',
        path: `${__dirname}/src/frontmatter-schema/`,
      },
    },
    {
      resolve: 'gatsby-remark-reading-time',
    },

  ],
};
