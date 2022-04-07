<template>

    <div class="container">
        <label class="form-label" for="nombre"> Nombre Completo:</label>
        <input class="form-control" type="text"  v-model="nombre">            
  
        <label class="form-label" for="telefono"> Telefono:</label>
        <input class="form-control" v-model="tel" type="tel" id="tel" name="tel">            
       
        <label for="email"> Email:</label>
        <input class="form-control" v-model="correo" type="email">
        <div id="emailHelp" class="form-text">Nosotros nunca compartimos tu información con alguien más.</div>
        

    </div>
    
</template>

<script>
export default {

    name:'PedidoCpDatos',
   
}
</script>


<style>

</style>