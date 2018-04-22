import axios from "axios"
import { API_KEY } from "./consts"

const store = {
  state: {
    videos: [],
  },
  mutations: {
    _addVideo: (state, video) => {
      state.videos.push(video)
    },
    _setVideos: (state, videos) => {
      state.videos = videos
    },
  },
  actions: {
    addVideo: ({ commit }, payload) => {
      commit("_addVideo", payload)
    },
    searchVideo: ({ commit }, payload) => {
      axios
        .get("/search", {
          params: {
            key: API_KEY,
            part: "snippet",
            q: payload,
          },
        })
        .then(res => {
          const videos = res.data.items.map(item => ({
            ...item,
            id: item.id.videoId,
          }))
          commit("_setVideos", videos)
        })
    },
  },
  getters: {
    videos: state => state.videos,
  },
}

export default store
