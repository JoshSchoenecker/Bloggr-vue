import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: {},
    activeBlog: {},
    userComments: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog;
    },
    setUserComments(state, blogs){
      state.userComments = blogs
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error, "getProfile failing");
      }
    },
    async getBlog({ commit }, blogId) {
      try {
        let res = await api.get(`blogs/${blogId}`);
        console.log("activeBlog", res.data);
        commit("setActiveBlog", res.data);
      } catch (error) {
        console.error(error, "failed to getBlog");
      }
    },

    async getBlogs({ commit }) {
      try {
        let res = await api.get("blogs");
        console.log(res.data);
        commit("setBlogs", res.data);
      } catch (error) {
        console.error(error, "getBlogs failing");
      }
    },

    async addBlog({ dispatch }, newBlog) {
      try {
        let res = await api.post("blogs", newBlog);
        dispatch("getBlogs");
      } catch (error) {
        console.error(error, "addBlog failing");
      }
    },

    async deleteBlog({ dispatch }, blogId) {
      try {
        await api.delete(`blogs/${blogId}`);
        dispatch("getBlogs");
      } catch (error) {
        console.error(error, "deleteBlog Failed");
      }
    },

    async editBlog({ commit, dispatch }, blog) {
      try {
        console.log(blog, "editblog");
        
        debugger;
        let res = await api.put("blogs/" + blog._id, blog);
        dispatch("getBlog", blog._id);
      } catch (error) {
        console.error(error, "editBlog failing");
      }
    },

    async addComment({ dispatch }, newComment) {
      try {
        let res = await api.post("comments", newComment);
        dispatch("getBlog", newComment.blogId);
      } catch (error) {
        console.error(error, "addComment failing");
      }
    },
    async deleteComment({ dispatch }, comment) {
      try {
        let res = await api.delete("comments/" + comment.id);
        dispatch('getBlog', comment.blogId)
      } catch (error) {
        console.error(error, "deleteComment failed");
      }
    },
    async editComment({ commit, dispatch }, comment) {
      try {
        debugger;
        let res = await api.put("comments/" + comment._id, comment);
        commit("setBlogs", res.data);
        dispatch("getBlogs", comment.blogId);
      } catch (error) {
        console.error(error, "editComment failing");
      }
    },
    async getUserComments({commit, dispatch}) {
      try {
        let res = await api.get('profile/blogs/')
        commit('setUserComments', res.data)
      } catch (error) {
        console.error(error, "getUserComments failing");
      }
    },
    getUserBlogs({commit, dispatch}) {
      try {
        
      } catch (error) {
        
      }
    }
  },
});
