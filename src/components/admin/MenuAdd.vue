<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>菜单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">菜单列表</el-menu-item>
                <el-menu-item index="3-2">增加菜单</el-menu-item>
              </el-menu-item-group>
            </el-submenu>



          </el-menu>
        </el-col>
        <el-col :span="8">
          这里是增加菜单内容
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        msg: ''
      }
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
</style>
