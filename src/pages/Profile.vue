<template>
  <div class="about text-center container-fluid">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <hr><hr>
		<!-- userser comments -->
		<!-- NOTE you can not use a v-for and a v-if in the same tag, use a wrapper element-->
		<!-- TODO delete and edit functionality -->
    <comment v-for="comment in userComments" :comment="comment" :key="comment.id" />
  </div>
</template>

<script>
import comment from "../components/Comment.vue"
import Blog from "../components/Blog.vue"
export default {
  name: "Profile",
  computed: {
		// NOTE profile currently an empty object, (create a variable to store user comments, and use a mutation to setUserComments)
    profile() {
      return this.$store.state.profile;
		},
		userComments(){
      return this.$store.state.userComments
    },
	},
	mounted(){
		this.$store.dispatch('getUserComments')
	},
  components: { comment, Blog}
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
