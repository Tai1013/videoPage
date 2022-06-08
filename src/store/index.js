import { toRaw } from "vue";
import { createStore } from 'vuex'
import axios from "../plugins/axios";

export default createStore({
  state: {
    videoList: [],
    videoLoveList: []
  },
  actions: {
    GET_VIDEO({ commit }) {
      const videoLocal = localStorage.getItem("youtubeList");
      if (!videoLocal) {
        axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=apple&key={YOUR KEY}&type=video&maxResults=20")
          .then((res) => {
            localStorage.setItem("youtubeList", JSON.stringify(res.data.items));
            commit('SET_VIDEO', res.data.items)
          })
          .catch((err) => {
            console.log("err: ", err);
          });
      } else {
        commit('SET_VIDEO', JSON.parse(videoLocal))
      }
    },
    GET_LOVE_VIDEO({ commit }) {
      const loveLocal = JSON.parse(localStorage.getItem("loveList"));
      if (loveLocal) commit('SET_LOVE_LIST', loveLocal)
    },
    ADD_LOVE_VIDEO({commit}, videoData) {
      commit('ADD_LOVE_LIST', videoData)
    },
    DEL_LOVE_VIDEO({commit}, videoData) {
      commit('DEL_LOVE_LIST', videoData)
    }
  },
  mutations: {
    SET_VIDEO(state, obj) {
      state.videoList = obj
    },
    SET_LOVE_LIST(state, obj) {
      state.videoLoveList = []
      state.videoLoveList = obj
    },
    ADD_LOVE_LIST(state, obj) {
      state.videoLoveList.push(obj)
      localStorage.setItem("loveList", JSON.stringify(state.videoLoveList));
    },
    DEL_LOVE_LIST(state, obj) {
      let data = state.videoLoveList
      state.videoLoveList = []
      for (let i = 0; i < data.length; i++) {
        if (obj.channelTitle != data[i].channelTitle) state.videoLoveList.push(data[i])
      }
      localStorage.setItem("loveList", JSON.stringify(state.videoLoveList));
    }
  },
  getters: {
    videoList: state => state.videoList,
    videoLoveList: state => state.videoLoveList
  }
})