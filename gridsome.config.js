// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CO_SPACE, // required
        accessToken: process.env.CO_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Blog',
        remark: {
          // remark options
        }
      }
    }
  ],
  templates:{
    ContentfulServicios:'/servicios/:slug',
    ContentfulFibra:'/fibras/:slug',
    ContentfulCrc: '/crc/:slug',
    ContentfulSoluciones: '/soluciones/:slug',
    ContentfulPost: '/post/:slug',
    Blog:[
      {
        path: "/blog/:title",
        component:"./src/templates/Blog.vue"
      }
    ]
  },
}
