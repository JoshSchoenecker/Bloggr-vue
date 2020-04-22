<template>
  <div class="about text-center container-fluid">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <hr><hr>
		<!-- TODO now getting more 400 errors, ask D$ about repeated 400 from getBlog -->
		<!-- TODO attach comments to user blog post -->
		<div class="row m-auto">
			<div class="col-12">

			<h1>Your Blog Posts</h1>
		<Blog v-for="blog in userBlogs" :blogData="blog" :key="blog.id" />
		<hr>
			</div>
			
		<!-- userser comments -->
		<!-- NOTE you can not use a v-for and a v-if in the same tag, use a wrapper element-->
		<!-- TODO fix delete and edit functionality -->
		<!-- TODO attach parent blog post to user comment -->
		<div class="col-12 mt-5">
			<h1>Your Comments</h1>
    <comment v-for="comment in userComments" :comment="comment" :key="comment.id" />
		</div>
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
