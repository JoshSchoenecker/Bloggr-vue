<template>
 <div class="Create-Comment col-6 m-auto text-center border bg-dark text-white shadow p-2">
<div class="form-group">
      <label for>Post Body</label>
      <input
        type="text"
        class="form-control"
        placeholder="Type Comment Here..."
        v-model="newComment.body"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="addComment()">Add Comment</button>
  </div>
</template>


<script>
export default {
    name: 'Create-Comment',
    props: ["blogData"],
    data(){
        return {
            newComment: {},
        }
    },
    computed:{},
    methods:{
        addComment() {
            this.newComment.blogId = this.blogData.blog._id

            this.newComment.creatorEmail = this.blogData.blog.creatorEmail
            this.$store.dispatch("addComment", this.newComment)
            this.newComment = {}
        }
    },
    components:{}
}
</script>


<style scoped>

</style>