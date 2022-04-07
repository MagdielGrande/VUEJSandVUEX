<template>
<div class="container d-flex justify-content-center" style="width:100%; flex-wrap:wrap;">
  <div class="card conMargen borderdiv" style="width: 25rem;">
        
        <img src="../assets/logo2.png" class="card-img-top" alt="...">
        
        <div class="card-body">
          <p class="card-text"></p>
          <p>Pastelería Pinky's una empresa de creación de pasteles como nunca te los has imaginado.
            El sabor mejorado con un toque de Pinky's que esperas! pide el tuyo ahora mismo</p>
        
        </div>
      
      </div>
</div>

<AboutCp />
</template>

<script>
import AboutCp from '@/components/AboutComponent.vue'

export default {
  name:'AboutView',
  components:{
    AboutCp
  }
}
</script>

<style scoped>

</style>
