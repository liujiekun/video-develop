<template>
  <div>
    <el-row>
      <div id="wrapper"></div>
    </el-row>
  </div>
</template>

<script>
import Chimee from 'chimee'
import chimeePluginControl from 'chimee-plugin-controlbar'
export default {
  data () {
    return {
      instance: null,
      controlPluginName: chimeePluginControl.name
    }
  },
  mounted () {
    Chimee.install(chimeePluginControl)
    this.instance = new Chimee({
      wrapper: '#wrapper', // video dom容器
      src: 'http://chimee.org/vod/1.mp4',
      box: 'native',
      autoplay: true,
      controls: true,
      plugin: [{
        name: this.controlPluginName,
        majorColor: '#fff', // 整体的默认显示状态
        hoverColor: '#bbb', // 播放暂停按钮的hover
        children: {
          play: {},
          progressTime: {},
          progressBar: {},
          volume: {},
          screen: {},
          clarity: {
            list: [
              { name: '标清', src: '', default: true },
              { name: '高清', src: '' },
              { name: '原画', src: '' }
            ]
          },
          playbackrate: {
            list: [{
              name: '0.5倍速',
              value: 0.5
            },
            {
              name: '1倍速',
              value: 1,
              default: true
            },
            {
              name: '2倍速',
              value: 2
            }]
          }
        }
      }]
    })
  },
  methods: {
  },
  computed: {
    controlPlugin () {
      return this.instance.$plugins[this.controlPluginName]
    }
  }
}
</script>
<style scoped>
#wrapper {
  width: 100%;
  height: 300px;
  margin: 0 auto;
}
.danmuContent {
  width: 360px;
}
.el-row + .el-row {
  margin-top: 15px;
}
</style>
