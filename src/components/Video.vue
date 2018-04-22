<template>
  <div class='video-result'
       @click="onClick">
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
</template>

<script>
export default {
  props: ["video"],
  filters: {
    utcDate: value => new Date(value).toLocaleString(),
  },
  methods: {
    onClick() {
      console.log(this.video)
      // this.$router.push({
      // path: "http://www.youtube.com/watch?v=" + this.video.id,
      // })
      window.location.href = "http://youtube.com/watch?v=" + this.video.id
    },
  },
}
</script>

<style>
.video-result {
  display: flex;
  align-content: center;
  /* align-items: center; */
  border: 1px solid rgba(0, 0, 0, 0.8);
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
