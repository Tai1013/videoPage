import { createStore } from 'vuex'
import axios from "../plugins/axios";

export default createStore({
  state: {
    videoList: []
  },
  actions: {
    GET_VIDEO({ commit }) {
      const videoLocal = localStorage.getItem("youtubeList");
      if (!videoLocal) {
        axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=apple&key=AIzaSyD9nxteEDV5z9kU7PapG2S8G4ORz3fjIzM&type=video&maxResults=5")
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
    }
  },
  mutations: {
    SET_VIDEO(state, obj) {
      state.videoList = obj
    },
  },
  getters: {
    videoList: state => state.videoList
  }
})