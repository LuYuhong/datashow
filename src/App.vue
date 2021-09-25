<template>
  <div id="app">
    <!-- <Index msg="Welcome to Your Vue.js App"/> -->
    <!-- 
      Login 中 $emit 了 Head 中的 $on 用于传值，但不成功。原因是这里没有加上 keep-alive。
      在App.vue里面，一定要用keep-alive把router-view包起来，否则接收方会修改数据不成功。
      keep-alive是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM 
    -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import Index from './components/Index.vue'

export default {
  name: 'App',
  // components: {
  //   Index
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
