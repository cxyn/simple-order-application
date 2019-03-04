<template>
  <el-container>
    <el-header>头部</el-header>
    <el-main>
      <el-row class="tac">
        <Navi :current='1'></Navi>
        <el-col style="display: flex;background-color: #f1f1f1;padding-left: 20px;">
          这里是订单列表内容
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
  import Navi from './Navi.vue'
  export default {
    data() {
      return {
        msg: ''
      }
    },
    mounted: function() {

    },
    methods: {

    }
  }
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-menu-item a {
    color: #fff;
}
</style>
