<template>
  <div class="BlogPage container-fluid">
    <!-- the single blog card -->
    <div class="row m-auto">
      <div class="col-10 text-center m-auto" v-if="blogInfo.blog">
        <div class="card card-body mt-5">
          <!-- Delete blog -->
          <div class="row justify-content-end">
            <button
              class="text-danger"
              v-if="$auth.userInfo.name == blogInfo.blog.creator.name"
              @click="deleteItem()"
            >
              <span>&times;</span>
            </button>
          </div>
          <h4>{{blogInfo.blog.title}}</h4>
          <h5>By: {{blogInfo.blog.creator.name}}</h5>
          <hr />
          <h5>{{blogInfo.blog.body}}</h5>
          <hr />
        </div>
        <!-- edit blog  -->
        <div class="row">
          <div class="col-2">
            <button
              style="width:3rem"
              v-if="$auth.userInfo.name == blogInfo.blog.creator.name"
              @click="editing = !editing"
            >Edit Post</button>
          </div>
          <div class="col-10">
            <form v-if="editing" @submit.prevent="editItem()">
              <input type="text" v-model="blogInfo.blog.body" />
              <button
                v-if="$auth.userInfo.name == blogInfo.blog.creator.name"
                type="submit"
              >Submit Change</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <!-- comments -->
    <div class="row">
      <div class="col-12 mt-5 text-center border p-3">
        <h3>Write a comment!</h3>
      <CreateComment />
      </div>
      <div class="col-8 text-center mt-5 mb-4 bg-light py-2 mx-auto rounded">
      <h1 class="border-bottom shadow">Comments</h1>
      </div>
      <Comment v-for="comment in comments" :comment="comment" :key="comment._id"/>
      </div>
    </div>
</template>

<script>
import Comment from "../components/Comment.vue"
import CreateComment from "../components/CreateComment.vue";
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
    comments(){
      return this.$store.state.activeBlog.comments
    },
    blogInfo() {
      return this.$store.state.activeBlog;
      console.log(this.$store.state.activeBlog);
    }
  },
  methods: {
    deleteItem() {
      debugger;
      let deleteItem = this.$route.params.blogId;
      this.$store.dispatch("deleteBlog", deleteItem);
    },
    editItem() {
      let editItem = this.blogInfo.blog;
      this.$store.dispatch("editBlog", editItem);
    }
  },
  components: { CreateComment, Comment }
};
</script>


<style scoped>
</style>