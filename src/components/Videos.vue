<template>
  <div>
    <transition-group name="slide">
      <Video :key="video.id"
             :video='video'
             v-for="video in videos">{{ video.id }}</Video>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

import Video from "./Video.vue"

export default {
  computed: {
    ...mapGetters(["videos"]),
  },
  components: {
    Video,
  },
}
</script>

<style>
.video-list {
  list-style-type: none;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
