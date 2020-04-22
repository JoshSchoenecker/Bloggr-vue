<template>
      <div class="comment container-fluid col-10 text-center m-auto">
        <div v-if="editing" class="card card-body">
            <div class="row justify-content-end">
          <button
            v-if="$auth.userInfo.email == comment.creator.email"
            class="btn btn-danger"
            @click="deleteComment()"
          >
            <span>&times;</span>
          </button>
            </div>
            <!-- TODO ask D$ about Scss  -->
          <div class="col-1 border border-black pt-2 shadow">
          <img class="img-thumbnail" :src="comment.creator.picture" alt="" />
          <p>{{comment.creator.name}}</p>
          </div>
          <div class="col-10 text-center">
          <h5>{{comment.body}}</h5>
          </div>
          <hr />

          <button
            v-if="$auth.userInfo.email == comment.creator.email"
            class="btn btn-warning"
            @click="editing = !editing"
          >Edit</button>
        </div>
        <form v-else @submit.prevent="editComment">
          <input type="text" v-model="comment.body" />
          <button
            type="button"
            v-if="$auth.userInfo.email == comment.creator.email"
            @click="editing = !editing"
          >Submit</button>
        </form>
      </div>
</template>


<script>
export default {
  name: "comment",
  props: ["comment"],
  data() {
    return {
      editing: true
    };
  },
  computed: {
    
  },
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", this.comment);
      
    },
    editComment() {
      debugger;
      this.$store.dispatch("editComment", this.comment);
      this.editing = true;
    }
  },
  mounted() {
    this.$store.dispatch("getBlog", this.$route.params.blogId);
  },
  components: {}
};
</script>


<style>

</style>