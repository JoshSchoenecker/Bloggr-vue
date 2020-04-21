<template>
    <div class="comment container-fluid">
    <div class="row mt-3">
        <div class="col-10 text-center m-auto">
            <div v-if="editing" class="card card-body">
                <h5>{{comment.body}}</h5>
                <p>- {{comment.creator.name}}</p>
                <hr>

                     <button v-if="$auth.userInfo.email == comment.creator.email" class="btn btn-warning" @click="editing = !editing">Edit</button>

            <button v-if="$auth.userInfo.email == comment.creator.email" class="btn btn-danger" @click="deleteComment()">Delete</button>
            </div>
            <form v-else @submit.prevent="editComment">
                <input type="text" v-model="comment.body"/>
                <button 
                type="button"
                v-if="$auth.userInfo.email == comment.creator.email"
                @click="editing = !editing"
                >Submit</button>
            </form>
        </div>
    </div>
    </div>
</template>


<script>

export default {
    name: 'comment',
    props: ['comment'],
    data(){
        return {
            editing: true,
        }
    },
    computed:{
    blog() {
        return this.$store.state.activeBlog.blog
    },
    comments(){
        return this.$store.state.activeBlog.comments
    }
    },
    methods:{
        deleteComment() {
            this.$store.dispatch("deleteComment", this.comment)
        },
        editComment(){
            debugger
			this.$store.dispatch('editComment', this.comment)
			this.editing = true
        }
    },
    mounted() {
        this.$store.dispatch("getBlog", this.$route.params.blogId)
    },
    components:{}
}
</script>


<style scoped>

</style>