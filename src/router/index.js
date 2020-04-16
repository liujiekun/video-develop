import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import container from '@/container/container'

import ChimeeDanmu from '@/chimee/chimeeDanmu.vue'
import ChimeePopup from '@/chimee/chimeePopup.vue'
import ChimeeControl from '@/chimee/ChimeeControl'

import VideoDanmu from '@/video/videoDanmu.vue'
import VideoPopup from '@/video/videoPopup.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      component: container,
      redirect: 'chimee_danmu',
      children: [{
        path: 'chimee_danmu',
        component: ChimeeDanmu
      },
      {
        path: 'chimee_control',
        component: ChimeeControl
      },
      {
        path: 'chimee_popup',
        component: ChimeePopup
      },
      {
        path: 'video_danmu',
        component: VideoDanmu
      },
      {
        path: 'video_danmu',
        component: VideoPopup
      }]
    }]
})
