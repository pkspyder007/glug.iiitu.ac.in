module.exports = {
  siteMetadata: {
    bio: 'World is open source!',
    title: 'GLUG IIITU',
    author: 'Shivam Tripathi',
    description: 'Official site for GNU/Linux user group IIIT Una',
    siteUrl: 'https://glug.iiitu.ac.in',
    social: {
      github: 'https://github.com/glug-iiitu',
    },
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '${__dirname}/src/content',
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
        extensions: ['.mdx', '.md'],
        plugins: [
          {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: '${__dirname}/src/content',
              name: 'markdown-pages',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
            },
          },
        ],
      },
    },
  ],
};
