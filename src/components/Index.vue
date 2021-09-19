<template>
  <div>
    <el-container>
      <el-header>
        <Head></Head>
      </el-header>
      <el-container>
        <el-aside width="200px" style="height:100%; padding: 0%;">
          <aside-tree/>
        </el-aside>
        <el-divider direction="vertical"></el-divider>
        <el-main style="background-color: silver;">
          <data-page></data-page>
          <!-- <markdown-editor></markdown-editor> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideTree from './AsideTree.vue';
import Head from './Head.vue';
import DataPage from './DataPage.vue'
import MarkdownEditor from './MarkdownEditor.vue';


export default {
  components: { AsideTree, Head, DataPage, MarkdownEditor },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

p{
    font-size: 25px;
    text-align: center;
}

/deep/ .el-header {
    padding: 0%;
    box-sizing: border-box;
    flex-shrink: 0;
}

.el-divider--vertical {
  display: inline-block;
  height: 55em;
  width: 2px;
  vertical-align: middle;
}

</style>
