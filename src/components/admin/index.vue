<template>
  <el-container>
    <el-header>头部</el-header>
    <el-main>
      <el-row class="tac">
        <Navi></Navi>
        <el-col style="display: flex;background-color: #f1f1f1;padding-left: 20px;">
          这里是管理首页内容
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
    components: {
      Navi
    },
    mounted: function() {

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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
    text-decoration: none;
}
.tac {
  display: flex;
}
.el-menu {
  border-right: 0;
}
.el-header {
  background-color: rgb(80, 78, 87);
}
.el-main {
  padding: 0;
}

</style>
