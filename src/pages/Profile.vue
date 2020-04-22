<template>
  <div class="about text-center container-fluid">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <hr><hr>
		<!-- TODO now getting more 400 errors, ask D$ about repeated 400 from getBlog -->
		<div class="row m-auto">
			<div class="col-10 m-auto">

		<Blog v-for="blog in userBlogs" :blogData="blog" :key="blog.id" />
		<hr>
			</div>
		<!-- userser comments -->
		<!-- NOTE you can not use a v-for and a v-if in the same tag, use a wrapper element-->
		<!-- TODO delete and edit functionality -->
    <comment v-for="comment in userComments" :comment="comment" :key="comment.id" />
		</div>
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
		userBlogs(){
			return this.$store.state.userBlogs
		}
	},
	mounted(){
		this.$store.dispatch('getUserBlogs')
		this.$store.dispatch('getUserComments')
		this.$store.dispatch('getProfile')
	},
  components: { comment, Blog}
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
