<template>
  <el-container class="container">
    <el-header>播放器demo</el-header>
    <el-container>
      <el-aside width="200px">
        <myaside></myaside>
      </el-aside>
      <el-container>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
        <el-footer class="footer">
          <myfooter></myfooter>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import myaside from '@/container/myaside.vue'
import myfooter from '@/container/myfooter.vue'
export default {
  components: {
    myaside,
    myfooter
  }
}
</script>
<style scoped>
.container {
  height: 100%;
}
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
