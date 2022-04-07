<template>

<div class="container">
 <label for="sabor1"> Sabor principal:</label>
                <select v-model="$store.state.adorno" name="sabor1" class="form-select" aria-label="Default select example">
        
                    <option selected disabled>Selecciona un sabor:</option>
                    <option value="Limon">Limon</option>
                    <option value="Fresa">Fresa</option>
                    <option value="Vainilla">Vainilla</option>
                    <option value="Chocolate">chocolate</option>
                    
                </select>
        
                <label for="sabor2">Agregar segundo sabor:</label><br>
                
                <select name="sabor2" v-model="$store.state.adorno2" class="form-select" aria-label="Default select example">
                        
                    <option value="Ninguno" selected >Ninguno</option>
                    <option value="Limon">Limon</option>
                    <option value="Fresa">Fresa</option>
                    <option value="Vainilla">Vainilla</option>
                    <option value="Chocolate">chocolate</option>
                        
                 </select><br><br>
    
</div>
               
</template>

<script>
export default {
    name:'PedidoCpSabores'
    
}
</script>


<style>

</style>