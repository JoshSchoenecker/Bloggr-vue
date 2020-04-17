<template>

  <div class="home container-fluid">
    <div class="row my-3">
    <CreateBlog v-if="$auth.isAuthenticated"/>
    <small class="text-danger" v-else> 
      You must log in to create a joke. 
    </small>
    </div>
    <div class="row m-auto justify-content-center">
      <h1 class="col-12 text-center">Blogs</h1>
      <Blog v-for="blog in blogs" :blogData="blog" :key="blog._id"/>
    </div>
  </div>

</template>

<script>

import Blog from "../components/Blog.vue"
import CreateBlog from "../components/CreateBlog.vue"

export default 
{
  name: "home",
  data(){
    return {}
  },
    mounted(){
      this.$store.dispatch('getBlogs')
    },
  computed: 
  {
    blogs(){
      return this.$store.state.blogs
    }
  },

  components: { CreateBlog ,Blog }
};

</script>
