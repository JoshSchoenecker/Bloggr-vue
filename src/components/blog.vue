<template>
 <div class="blog">
  <p>{{blogData.title}}</p>
  <p>{{blogData.body}}</p>
 </div>
</template>


<script>
export default {
    name: 'blog',
    props: ["blogData"],
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