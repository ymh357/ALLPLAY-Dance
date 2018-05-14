<template>
    <div id="appWrapper">
        <my-header></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>

</template>

<script>
    import $ from 'jquery'
    import myHeader from './components/Header.vue'
    import myFooter from './components/Footer.vue'
    export default {
        name: 'app',
        components:{
            'my-footer':myFooter,
            'my-header':myHeader
        }
    };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
    #appWrapper{
        height:100%;
    }
</style>
