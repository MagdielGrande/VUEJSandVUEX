<template>
  <h2 class="conMargenTop">Un diferente sabor, con lo especial de Pinky's</h2>
  <p class="container lineaBorde">Pasteles originales simples</p>

  <PrimeraSection />
  <!--
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
-->
<p class="container lineaBorde "> Agregale tu adorno a tu Pastel preferido</p>

<SegundaSection />

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import PrimeraSection from '@/components/HomeSectionPrimero.vue'
import SegundaSection from '@/components/HomeSectionSegundo.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
     PrimeraSection, SegundaSection
  }
}
</script>
<style >
.conMargen{
  margin: 5px;
}
.conMargenTop{
  margin-top: 20px;
  color: #a50081;
}
.lineaBorde{
  border-bottom:1px solid #a50081;
  margin-top: 50px;
  color: white;
  font-weight: bold;
}
.borderdiv{
  border-radius: 0 0 20px 20px;

}
h2{
  color: #35495e;
}
</style>
