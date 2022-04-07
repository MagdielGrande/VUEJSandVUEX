<template>
    <div class="container">
         <label form-label for="adornos">Agregar Adornos:</label>
             
                <select v-model="adorno" name="adornos" class="form-select" aria-label="Default select example">
                        
                    <option selected disabled>Ninguno</option>
                    <option value="Felicidades">Felicidades</option>
                    <option value="Forma del P.">Forma del pastel</option>
                    <option value="Pisos">Varios Pisos</option>
                    <option value="Mensaje como nota">Algún mensaje</option>
                        
                 </select>
                 <label for="adornos2">Agregar otro Adornos:</label>
                
                 <select v-model="adorno2" name="adornos2" class="form-select" aria-label="Default select example">     
                     <option selected >Ninguno</option>
                    <option value="Felicidades">Felicidades</option>
                    <option value="Forma del P.">Forma del pastel</option>
                    <option value="Pisos">Varios Pisos</option>
                    <option value="Mensaje como nota">Algún mensaje</option>    
                  </select>

    </div>
   
</template>

<script>
export default {
    name:'PedidoCpAdornos'
    
}
</script>


<style>

</style>