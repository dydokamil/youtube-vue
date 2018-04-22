<template>
  <div>
    <Video :key="video.id"
           :video='video'
           v-for="video in videos">{{ video.id }}</Video>
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
</style>
