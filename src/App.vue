<template>
  <div id="app">
    <NavbarComp></NavbarComp>
    <HeaderComp></HeaderComp>

    <!-- <div class="content">
      <router-view/>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import HeaderComp from '@/components/skeletons/HeaderComp'
import NavbarComp from '@/components/skeletons/NavbarComp'
// const HeaderComp = () => import('@/components/skeletons/HeaderComp')
export default {
  name: 'App',
  components: {
    HeaderComp,
    NavbarComp
  }
}
</script>

<style>
html{
  margin: 0;
  padding: 0;
}
body{
  background-color: rgb(50,90,101);
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}


.content{
  padding-top: 20px;
}
</style>
