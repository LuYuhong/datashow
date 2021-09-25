import index from './components/Index.vue'

const routers = [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/',
    component: index
  },
  {
    path: '/login',
    component: login => require(['@/components/Login'], login)
  }
]
export default routers