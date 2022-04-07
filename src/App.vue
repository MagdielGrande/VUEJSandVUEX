<template>
<HeaderCp />
  <nav class="nav">
    <router-link to="/">Inicio</router-link> 
    <router-link to="/pedidos">Pedidos</router-link>
    <router-link to="/pastelero">Pastelero</router-link>
    <router-link to="/acercade">Acerca de </router-link>
  </nav>
  <router-view/>

  <FooterCp />
</template>

<script>
import HeaderCp from '@/components/HeaderComponents.vue'
import FooterCp from '@/components/FooterComponent.vue'
export default {
  name: 'App',
  components:{
    HeaderCp, FooterCp
  }
}
</script>


<style>
body{
  background-image: url('/src/assets//background.jpg');
 background-repeat: no-repeat;
 width: 100%;
 height: 100%;

 
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {   
    margin: 0%;
    font-size: 30px;
    background-color: #ff99c9;
    color: white; 
}

header h1{
  display: inline-flex;
  font-weight: bold;
  
  margin: 0%;
}

nav {
  padding: 5px;
  background-color: white;
}

nav a {
  font-weight: bold;
  color: #ff99c9;
  margin: 10px;
  text-decoration: none;

}
nav a:hover{
  color: #ff0278;
  
}

nav a.router-link-exact-active {
  color: #ff0278;
}

</style>
