<template>
    <button class="btn btn-primary" @click="backToHome()">Back to {{pageName}}</button>
</template>

<script>
    export default {
        methods:{
            backToHome(){
                this.$router.push({path:'/'+this.pageName})
            }
        },
        props:['pageName']
    }
</script>