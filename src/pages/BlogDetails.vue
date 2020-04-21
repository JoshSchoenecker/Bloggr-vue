<template>
  <div class="BlogPage container-fluid">
    <!-- the single blog card -->
    <div class="row m-auto">
      <div class="col-10 text-center m-auto" v-if="blogInfo.blog">
        <div class="card card-body mt-5">
          <!-- TODO delete button. move to left side? -->
          <div class="row">
        <button class="text-danger" v-if="$auth.userInfo.name == blogInfo.blog.creator.name" @click="deleteItem()"> 
          <span>&times;</span>
        </button>
          </div>
          <h4>{{blogInfo.blog.title}}</h4>
          <h5>By: {{blogInfo.blog.creator.name}}</h5>
          <p>{{blogInfo.blog.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBlog", this.$route.params.blogId);
  },
  computed: {
    blogInfo() {
      return this.$store.state.activeBlog;
      console.log(this.$store.state.activeBlog);
    }
  },
  methods: {
    deleteItem(){
      debugger
      let deleteBlog = this.$route.params.blogId 
      this.$store.dispatch("deleteBlog", deleteBlog)
    }
  },
  components: {}
};
</script>


<style scoped>
</style>