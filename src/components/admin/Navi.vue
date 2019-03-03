<template>
  <el-col :span="4" style="min-height: 100vh;background-color: rgb(84, 92, 100);">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title"><router-link to="/admin/user">用户管理</router-link></span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title"><router-link to="/admin/orderList">订单管理</router-link></span>
      </el-menu-item>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>菜单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1"><router-link to="/admin/menuList">菜单列表</router-link></el-menu-item>
          <el-menu-item index="3-2"><router-link to="/admin/addMenu">增加菜单</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  props: {
    currentIndex: {
      type: Number,
      default: 1
    }
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
