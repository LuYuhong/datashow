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
]
export default routers