<template>
    <div class="comment container-fluid">
<div class="row mt-3">
        <div class="col-10 text-center m-auto">
            <div class="card card-body">
                <h5>{{comment.body}}</h5>
                <p>- {{comment.creator.name}}</p>
                <Create-Comment/>
                <button class="btn btn-danger" @click="deleteComment()">Delete</button>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
// TODO left off here do i need a import? create comment not working 
import CreateComment from "./CreateComment.vue"
export default {
    name: 'comment',
    props: ['comment'],
    data(){
        return {}
    },
    computed:{
    
    },
    methods:{
        deleteComment() {
            this.$store.dispatch("deleteComment", this.comment)
            this.$router.push({name: "BlogDetails"})
        },
    },
    mounted() {
        this.$store.dispatch("getBlog", this.$route.params.blogId)
    },
    components:{}
}
</script>


<style scoped>

</style>