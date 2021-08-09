// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const { posts, post } = require('./data/posts')
const { journals } = require('./data/journals')

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    /* posts(addCollection)
    post(addCollection)
    journals(addCollection) */
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    /* createPage({
      path: '/projects/:id',
      component: './src/templates/project.vue',
    }) */
  })
}
