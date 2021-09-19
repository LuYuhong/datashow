<template>
    <el-tree
        :data="data"
        node-key="id"
        default-expand-all
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-click="handleNodeClick"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag">
    </el-tree>    
    <!-- <el-button @click="test">click</el-button> -->
    <!-- <div>
        <el-button size="mini" icon="el-icon-refresh" @click="onRegionHeaderRefresh" />
        <el-tree
            class="region-tree"
            ref="regionTree"
            v-loading="isLoadingRegions"
            data="regions"
            :lazy="true"
            :props="props"
            :load="loadSubRegions"
            node-key="RegionsTree"
            @node-click="onNodeClick"
        />
    </div> -->
    <!-- <el-tree :props="props1" :load="loadNode1" lazy show-checkbox></el-tree> -->
</template>

<script>
import request from '../request.js'
import axios from 'axios'

  export default {
    data() {
      return {
            // isLoadingRegions: true,
            // regions: [],

        props1: {
            label: 'name', children: 'zones', isLeaf: 'leaf'
        },

        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [{
             id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
            request.post('/api/articles/search/' + data.id).then(res => {
                console.log(res);
                this.$bus.$emit('getContent', res.data.content);
                // let type = "error", message = res.msg;
                // if(res.code === 200) {
                //     type = "success", message = "ok"
                // }
                // this.$message({
                //     type: type,
                //     message: message
                // });
            });
        },
        handleDragStart(node, ev) {
            console.log('drag start', node);
        },
        handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter: ', dropNode.label);
        },
        handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave: ', dropNode.label);
        },
        handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over: ', dropNode.label);
        },
        handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end: ', dropNode && dropNode.label, dropType);
        },
        handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop: ', dropNode.label, dropType);
        },
        allowDrop(draggingNode, dropNode, type) {
            if (dropNode.data.label === '二级 3-1') {
            return type !== 'inner';
            } else {
            return true;
            }
        },
        allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
        }
    },
    mounted() {
        if(this.data != null && this.data[0] != null) { //  刚进入界面时，显示第一个的内容
            request.post('/api/articles/search/' + this.data[0].id).then(res => {
                console.log(res);
                this.$bus.$emit('getContent', res.data.content);
            });
        }
    }
  };
</script>