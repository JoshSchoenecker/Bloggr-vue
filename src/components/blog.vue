<template>
  <div class="card col-4 m-5 shadow Blog">
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
    getBlogs() {
      this.$store.commit("blogs", {});
    }
  },
  components: {}
};
</script>


<style scoped>
</style>