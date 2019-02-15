<template>
  <div id="app">
    <el-container class="todayMenu">
      <el-header>今日菜单</el-header>
      <el-main>
        <el-table
        ref="multipleTable"
        :data="menuList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">

        <el-table-column
          type="selection"
          width="55">
        </el-table-column>

        <el-table-column
          label="套餐"
          width="120">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>

        <el-table-column
          prop="price"
          label="价格"
          width="120">
        </el-table-column>

        <el-table-column
          prop="num"
          label="数量"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </template>
        </el-table-column>

      </el-table>
      </el-main>
      <el-footer>
        <div style="margin-top: 20px">
          <el-button type="primary" round @click="submitOrder()">提交订单</el-button>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [],
        multipleSelection: []
      }
    },
    mounted: function() {
      let _this = this;
      let _arr = [
        {
            name: '鱼香肉丝',
            price: '13',
            num: '1'
          },
          {
            name: '素菜',
            price: '13',
            num: '1'
          },
          {
            name: '京酱肉丝',
            price: '13',
            num: '1'
          },
          {
            name: '口水鸡',
            price: '13',
            num: '1'
          }
      ]
      _arr.forEach((item)=>{
        _this.menuList.push(item)
      })
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleChange(value) {
        console.log(value)
      },
      submitOrder() {
        console.log(this.multipleSelection)
        if(this.multipleSelection.length === 0) {
          this.$message({
            showClose: true,
            message: '请选择套餐！',
            type: 'warning'
          })
        }else {
          console.log('发起请求')
          this.$router.push('orderListToday')
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-table .cell {
  text-align: center;
}
.todayMenu {
  width: 80%;
  margin: 0 auto;
}
</style>
