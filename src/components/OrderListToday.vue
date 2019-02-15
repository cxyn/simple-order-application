<template>
  <div id="app">
    <el-container class="todayOrderList">
      <el-header>今日点餐列表</el-header>
      <el-main>
        <el-table
          :data="tableData2"
          style="width: 100%"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="personName"
            label="点餐人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="setName"
            label="套餐"
            width="180">
          </el-table-column>
          <el-table-column
            prop="num"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="cost"
            label="价格">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>  
  </div>
</template>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        return rowIndex % 2 === 1? 'success-row' : '';
      }
    },
    data() {
      return {
        tableData2: [
          {
            personName: '王云霄',
            setName: '素菜',
            num: 1,
            cost: '10.00' 
          },
          {
            personName: '王云霄',
            setName: '鱼香肉丝',
            num: 1,
            cost: '12.00' 
          },
          {
            personName: '王云霄',
            setName: '京酱肉丝',
            num: 1,
            cost: '12.00' 
          },
          {
            personName: '王云霄',
            setName: '京酱肉丝',
            num: 1,
            cost: '12.00' 
          },
          {
            personName: '王云霄',
            setName: '京酱肉丝',
            num: 1,
            cost: '12.00' 
          },
          {
            personName: '王云霄',
            setName: '京酱肉丝',
            num: 1,
            cost: '12.00' 
          },
          {
            personName: '王云霄',
            setName: '京酱肉丝',
            num: 1,
            cost: '12.00' 
          },
          {
            personName: '王云霄',
            setName: '京酱肉丝',
            num: 1,
            cost: '12.00' 
          }

        ]
      }
    }
  }
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
.todayOrderList {
  width: 80%;
  margin: 0 auto;
}
</style>
