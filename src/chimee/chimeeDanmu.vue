<template>
  <div>
    <el-row>
      <div id="wrapper"></div>
    </el-row>
    <el-row>
      <el-button @click="openOrCloseFn" type="primary">{{openOrCloseText}}</el-button>
      <el-button @click="startOrPauseFn" type="primary" :disabled="openOrClose">{{startOrPauseText}}</el-button>
      <el-input class="danmuContent" type="text" placeholder="输入弹幕内容" v-model="textContent"></el-input>
      <el-button @click="sendDanmu(undefined)" type="primary">发送弹幕</el-button>
      <el-button @click="sendDanmu('bottom')" type="primary">固定下方弹幕</el-button>
      <el-button @click="sendDanmu('top')" type="primary">固定上方弹幕</el-button>
      <el-button @click="changeSource" type="primary">下一集</el-button>
    </el-row>
  </div>
</template>

<script>
import Chimee from 'chimee'
import chimeePluginDanmu from 'chimee-plugin-danmu'
export default {
  data () {
    return {
      instance: null,
      danmuPluginName: chimeePluginDanmu.name,
      openOrCloseText: '打开弹幕',
      openOrClose: true,
      startOrPauseText: '暂停弹幕',
      startOrPause: true,
      textContent: '',
      lastTime: '',
      sendTimeInterval: 100,
      src: ''
    }
  },
  mounted () {
    Chimee.install(chimeePluginDanmu)
    this.instance = new Chimee({
      wrapper: '#wrapper', // video dom容器
      src: 'http://chimee.org/vod/1.mp4',
      box: 'native',
      autoplay: true,
      controls: true,
      plugin: [
        this.danmuPluginName
      ]
    })
    this.preReserveData()
    this.instance.$on('play', () => { console.log('play', arguments) }, { target: 'plugin' })
    this.instance.$on('timeupdate', () => { console.log('timeupdate', arguments) }, { target: 'plugin' })
  },
  methods: {
    openOrCloseFn () {
      this.openOrClose ? this.openDanmu() : this.closeDanmu()
      this.openOrClose = !this.openOrClose
      this.openOrCloseText = this.openOrClose ? '打开弹幕' : '关闭弹幕'
    },
    startOrPauseFn () {
      this.startOrPause ? this.pauseDanmu() : this.startDanmu()
      this.startOrPause = !this.startOrPause
      this.startOrPauseText = this.startOrPause ? '暂停弹幕' : '开始弹幕'
    },
    startDanmu () {
      console.log('start')
      this.danmuPlugin.start()
    },
    openDanmu () {
      this.danmuPlugin.open()
    },
    pauseDanmu () {
      this.danmuPlugin.pause()
    },
    closeDanmu () {
      console.log('close')
      this.danmuPlugin.close()
    },
    sendDanmu (mode) {
      console.log('mode', mode)
      if (this.checkSendMsg()) {
        this.danmuPlugin.sendMsg({
          text: this.textContent,
          color: '#eee',
          mode: mode || 'flow',
          speed: 0.001
        })
      }
    },
    danmuEvent (pieces) {
      console.log('pieces', pieces)
    },
    checkSendMsg () {
      if (!this.textContent) {
        this.$messageTips(this, 'warning', '发送消息不能为空')
        return false
      }
      let timeNow = new Date()
      if ((timeNow - this.lastTime) < this.sendTimeInterval) {
        this.$messageTips(this, 'error', '发送弹幕太过频繁')
        return false
      }
      this.lastTime = new Date()
      return true
    },
    // 播放历史弹幕
    preReserveData () {
      this.danmuPlugin.receiveData([
        '1111111',
        '2222222'
      ])
    },
    changeSource () {
      this.instance.load('./static/short.mp4', {})
      // this.src = './static/logo.png'
    }
  },
  computed: {
    danmuPlugin () {
      return this.instance.$plugins[this.danmuPluginName]
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
