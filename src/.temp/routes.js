const c1 = () => import(/* webpackChunkName: "page--src--templates--contentful-servicios-vue" */ "/home/uayeb/Escritorio/testful/src/templates/ContentfulServicios.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--contentful-soluciones-vue" */ "/home/uayeb/Escritorio/testful/src/templates/ContentfulSoluciones.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--contentful-post-vue" */ "/home/uayeb/Escritorio/testful/src/templates/ContentfulPost.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--contentful-fibra-vue" */ "/home/uayeb/Escritorio/testful/src/templates/ContentfulFibra.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--contentful-crc-vue" */ "/home/uayeb/Escritorio/testful/src/templates/ContentfulCrc.vue")
const c6 = () => import(/* webpackChunkName: "page--src--templates--blog-vue" */ "/home/uayeb/Escritorio/testful/src/templates/Blog.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--servicios-vue" */ "/home/uayeb/Escritorio/testful/src/pages/Servicios.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--soluciones-vue" */ "/home/uayeb/Escritorio/testful/src/pages/Soluciones.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--post-vue" */ "/home/uayeb/Escritorio/testful/src/pages/Post.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--fibras-vue" */ "/home/uayeb/Escritorio/testful/src/pages/Fibras.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--crc-vue" */ "/home/uayeb/Escritorio/testful/src/pages/Crc.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/uayeb/Escritorio/testful/src/pages/About.vue")
const c13 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/uayeb/Escritorio/testful/node_modules/gridsome/app/pages/404.vue")
const c14 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/uayeb/Escritorio/testful/src/pages/Index.vue")

export default [
  {
    path: "/servicios/:slug/",
    component: c1
  },
  {
    path: "/soluciones/:slug/",
    component: c2
  },
  {
    path: "/post/:slug/",
    component: c3
  },
  {
    path: "/fibras/:slug/",
    component: c4
  },
  {
    path: "/crc/:slug/",
    component: c5
  },
  {
    path: "/blog/:title/",
    component: c6
  },
  {
    path: "/servicios/",
    component: c7
  },
  {
    path: "/soluciones/",
    component: c8
  },
  {
    path: "/post/",
    component: c9
  },
  {
    path: "/fibras/",
    component: c10
  },
  {
    path: "/crc/",
    component: c11
  },
  {
    path: "/about/",
    component: c12
  },
  {
    name: "404",
    path: "/404/",
    component: c13
  },
  {
    name: "home",
    path: "/",
    component: c14
  },
  {
    name: "*",
    path: "*",
    component: c13
  }
]
