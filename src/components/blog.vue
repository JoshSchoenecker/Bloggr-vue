<template>
  <div class="card col-4 m-5 shadow Blog" @click="selectBlog()">
    <div class="card-body text-center">
      <div class="card-title border-bottom text-center font-weight-bolder">
        <p>{{blogData.title}}</p>
      </div>
      <p>- {{blogData.creator.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: ["blogData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectBlog() {
      this.$store.commit("setActiveBlog", {})
      this.$router.push({
        name:"BlogDetails",
        params: {blogId: this.blogData._id}
      })
    }
  },
  components: {}
};
</script>


<style scoped>
</style>