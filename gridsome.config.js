// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 100, // Defaults to 100
        contentTypes: ['blog-posts', 'journals'],
        tagName: 'Strapi', //默认Strapi
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: '',
        },
      },
    },
  ],
  templates: {
    //注意格式，上述的tagName+对应的集合name
    StrapiBlogPosts: [
      {
        path: '/projects/:id',
        component: './src/templates/Project.vue',
      },
    ],
    /* StrapiJournals: [
      {
        path: '/journal/:id',
        component: './src/templates/Journal.vue',
      }
    ], */
  },
}
