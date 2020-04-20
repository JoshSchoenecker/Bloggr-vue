<template>
    <div class="comment container-fluid">
<div class="row mt-3">
        <div class="col-10 text-center m-auto">
            <div class="card card-body">
                <h5>{{comment.body}}</h5>
                <p>- {{comment.creator.name}}</p>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    name: 'comment',
    props: ['comment'],
    data(){
        return {}
    },
    computed:{},
    methods:{},
    components:{}
}
</script>


<style scoped>

</style>