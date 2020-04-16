<template>
  <div>
    <video-player :options="videoOptions" />
  </div>
</template>

<script>
import VideoPlayer from '@/video/videoBasic.vue'
import videoSrc from '@/assets/short.mp4'
export default {
  data () {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: videoSrc,
            type: 'video/mp4'
          }
        ]
      }
    }
  },
  mounted () {
    console.log('this.components', this.components)
  },
  components: {
    VideoPlayer
  }
}
</script>
