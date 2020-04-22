<template>
  <div class="BlogPage container-fluid">
    <!-- the single blog card -->
    <div class="row m-auto">
      <div class="col-10 text-center m-auto" v-if="blogInfo.blog">
        <div class="card card-body mt-5">
          <!-- TODO delete button. move to right side? -->
          <div class="row justify-content-end">
        <button class="text-danger" v-if="$auth.userInfo.name == blogInfo.blog.creator.name" @click="deleteItem()"> 
          <span>&times;</span>
        </button>
          </div>
          <h4>{{blogInfo.blog.title}}</h4>
          <h5>By: {{blogInfo.blog.creator.name}}</h5>
          <hr>
          <h5>{{blogInfo.blog.body}}</h5>
          <hr>
          <!-- edit blog button -->
          <button style="width:3rem" v-if="$auth.userInfo.name == blogInfo.blog.creator.name" @click="editing = !editing">
            Edit Post
          </button>
          
          <form v-if="editing" @submit.prevent="editItem()">
            <input type="text" v-model="blogInfo.blog.body">
            <button v-if="$auth.userInfo.name == blogInfo.blog.creator.name" type="submit">
              Submit Change
            </button>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      editing: false
    };
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
      let deleteItem = this.$route.params.blogId 
      this.$store.dispatch("deleteBlog", deleteItem)
    },
    editItem(){
      let editItem = this.blogInfo.blog
      this.$store.dispatch("editBlog", editItem)
    }
  },
  components: {}
};
</script>


<style scoped>
</style>