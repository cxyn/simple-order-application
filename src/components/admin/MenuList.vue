<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-row class="tac">
        <Navi :current='3'></Navi>
        <el-col :span="8">
          这里是菜单列表内容
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
</style>
