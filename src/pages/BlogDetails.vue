<template>
  <div class="Blog-Details container-fluid">
    <div class="row">
      <div v-if="blogDetails.blog" class="col-8 text-center m-auto">
        <div class="card mt-5">
          <div class="card-body">
            <div class="card-title">
              <h5>{{blogDetails.blog.title}}</h5>

              <hr />
              <h5>{{blogDetails.blog.body}}</h5>
              <p>- {{blogDetails.blog.creator.name}}</p>
              <hr />

              <button
                v-if="$auth.userInfo.email == blogDetails.blog.creatorEmail"
                class="btn btn-warning shadow"
                @click="editing = !editing"
              >Edit</button>

              <form v-if="editing" @submit.prevent="editBlog">
                <input type="text" v-model="blogDetails.blog.body" />
                <button
                  type="submit"
                  v-if="$auth.userInfo.email == blogDetails.blog.creator.email"
                  class="btn btn-warning shadow"
                >Confirm</button>
              </form>

              <hr />
              <create-comment v-if="$auth.isAuthenticated"></create-comment>
              <button
                v-if="$auth.userInfo.email == blogDetails.blog.creator.email"
                class="btn btn-danger"
                @click="deleteBlog()"
              >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row mt-5">
      <div class="col-12 m-auto">
        <h2 class="text-center">Comments</h2>
      </div>
      <comment v-for="comment in comments" :comment="comment" :key="comment._id" />
    </div>
  </div>
</template>


<script>
import CreateComment from "../components/CreateComment";
import comment from "../components/Comment.vue";
export default {
  name: "Blog-Details",
  data() {
    return {
      editing: false
    };
  },
  mounted() {
    this.$store.dispatch("getBlog", this.$route.params.blogId);
  },
  computed: {
    blogDetails() {
      return this.$store.state.activeBlog;
    },
    comments() {
      return this.$store.state.activeBlog.comments;
    }
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.$route.params.blogId);
      this.$router.push({ name: "Home" });
    },
    editBlog() {
        debugger
      this.$store.dispatch("editBlog", this.activeBlog.blog);
      this.editing = false;
    }
  },
  components: { comment, CreateComment }
};
</script>


<style scoped>
</style>