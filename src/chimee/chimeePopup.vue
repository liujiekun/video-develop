<template>
  <div>
    <el-row>
      <div id="wrapper"></div>
    </el-row>
    <el-row>
      <el-button @click="open">开启</el-button>
      <el-button @click="close">关闭</el-button>
      <el-button @click="changeWidth">宽度</el-button>
      <el-button @click="changeHeight">高度</el-button>
      <el-button @click="changeOffset">偏移</el-button>
      <el-button @click="translate">移动</el-button>
      <el-button @click="reset">重置</el-button>
    </el-row>
  </div>
</template>

<script>
import Chimee from 'chimee'
import popup from 'chimee-plugin-popup'
export default {
  data () {
    return {
      instance: null,
      popupPluginName: 'ccPopup'
    }
  },
  mounted () {
    // 这个popup本身是一个pluginFactory，返回一个plugin
    Chimee.install(popup({
      name: 'cc_popup',
      title: '这是一个居中信息框',
      body: '这里是信息内容',
      offset: '50% 50%',
      width: '200px'
    }))
    this.instance = new Chimee({
      wrapper: '#wrapper', // video dom容器
      src: 'http://chimee.org/vod/1.mp4',
      box: 'native',
      autoplay: true,
      controls: true,
      plugin: [
        'ccPopup'
      ]
    })
  },
  methods: {
    open () {
      this.popupPlugin.open()
    },
    close () {
      this.popupPlugin.close()
    },
    changeWidth () {
      this.popupPlugin.width('300px')
    },
    changeHeight () {
      this.popupPlugin.height('100px')
    },
    changeOffset () {
      this.popupPlugin.offset('10px 20px')
    },
    translate () {
      this.popupPlugin.translate('10px 20px')
    },
    reset () {
      this.popupPlugin.width('200px').height('auto').offset('50% 50%')
    }
  },
  computed: {
    popupPlugin () {
      return this.instance.$plugins[this.popupPluginName]
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
</style>
