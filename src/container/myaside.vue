<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="/chimee_danmu">
        <template slot="title">
          <span>chimee播放器</span>
        </template>
        <el-menu-item index="/chimee_control">
          <i class="el-icon-menu"></i>
          <span slot="title">控制条</span>
        </el-menu-item>
        <el-menu-item index="/chimee_danmu">
          <i class="el-icon-menu"></i>
          <span slot="title">弹幕</span>
        </el-menu-item>
        <el-menu-item index="/chimee_popup">
          <i class="el-icon-menu"></i>
          <span slot="title">模态框</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/video_danmu">
        <template slot="title">video播放器</template>
        <el-menu-item index="/video_danmu">弹幕</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '/chimee_danmu'
    }
  },
  watch: {
    '$route': {
      handler (val) {
        this.activeIndex = val.path
      }
    }
  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-submenu,
.el-submenu .el-menu-item {
  text-align: left;
}
</style>
