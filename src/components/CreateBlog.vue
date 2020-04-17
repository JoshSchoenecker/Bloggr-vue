<template>
    <div class="Create-Blog col-6 m-auto text-center border bg-dark text-white shadow p-2">
    <div class="form-group">
      <label for>Post Title</label>
      <input
        type="text"
        class="form-control"
        placeholder="Title..."
        v-model="newBlog.title"
      />
    </div>
    <hr>
    <div class="form-group">
      <label for>Post Body</label>
      <input
        type="text"
        class="form-control"
        placeholder="Body..."
        v-model="newBlog.body"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="addBlog()">Add Blog</button>
  </div>
</template>


<script>
export default {
    name: 'Create-Blog',
    data(){
        return {
            newBlog: {}
        }
    },
    computed:{},
    methods:{
        addBlog() {
            this.$store.dispatch("addBlog", this.newBlog)
            this.newBlog = {}
        }
    },
    components:{}
}
</script>


<style scoped>

</style>