<template>
  <div>
    <div class='video-result'
         @click="showPlayer = !showPlayer">
      <div class='video-result-thumbnail'>
        <img :src="video.snippet.thumbnails.high.url">
      </div>
      <div class='video-result-info'>
        <div class='video-result-title'>{{ video.snippet.title }}</div>
        <div>{{ video.snippet.description }}</div>
        <div>
          <small>{{ video.snippet.channelTitle }}</small>
          <div>
            <small>{{ video.snippet.publishedAt | utcDate }}</small>
          </div>
        </div>
      </div>
    </div>
    <VideoPlayer v-if="showPlayer"
                 :src="video.id"></VideoPlayer>
  </div>
</template>

<script>
import VideoPlayer from "./VideoPlayer.vue"

export default {
  props: ["video"],
  data: () => ({
    showPlayer: false,
  }),
  filters: {
    utcDate: value => new Date(value).toLocaleString(),
  },
  methods: {
    onClick() {
      this.showPlayer = true
    },
  },
  components: {
    VideoPlayer,
  },
}
</script>

<style>
.video-result {
  display: flex;
  align-content: center;
  /* align-items: center; */
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  margin-top: 1rem;
  transition: 150ms;
}

.video-result:hover {
  transform: translateX(5px);
}

.video-result:hover {
  cursor: pointer;
}

.video-result-thumbnail {
  width: 25%;
}

.video-result-info {
  align-self: center;
  /* padding-right: 1rem; */
  /* padding-left: 1rem; */
  padding: 1rem;
}

.video-result-info {
  flex: 1;
}

.video-result-thumbnail > img {
  width: 100%;
  height: 100%;
}

.video-result-title {
  display: inline;
  font-weight: bold;
}
</style>
