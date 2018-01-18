<template>
    <div id="home">
        <my-header></my-header>
        <home-content></home-content>
    </div>
</template>

<script>
    import homeContent from '../components/HomeContent.vue'
    import myHeader from '../components/Header.vue'

    export default {
        components:{
            'home-content':homeContent,
            'my-header':myHeader,
        }
    };
</script>