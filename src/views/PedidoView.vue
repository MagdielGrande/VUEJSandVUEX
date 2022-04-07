<template>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="">
                <h1 class="pedidotitle">Haz tu orden Aqui!</h1>
                <form class="form-horizontal" @submit.prevent="addOrden" >
                        <div class="form-group d-flex justify-content-center" style="margin:10px;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                 <input class="form-control" type="text" placeholder="Nombre Completo"  v-model="nombre">   
                            </div>
                        </div>
                        <div class="form-group d-flex justify-content-center" style="margin:10px;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                              
                                <input class="form-control" placeholder="Telefono" v-model="tel" type="tel" id="tel" name="tel">    
                            </div>
                        </div>

                        <div class="form-group d-flex justify-content-center" style="margin:10px;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                           
                                 <input class="form-control" placeholder="Email" v-model="correo" type="email">
                            </div>
                        </div>

                        <div class="form-group d-flex justify-content-center" style="margin:10px;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                           
                                <select  name="sabor1" class="form-select">
                                    <option value="Selecciona un sabor" selected disabled>Selecciona un sabor:</option>
                                    <option value="Limon">Limon</option>
                                    <option value="Fresa">Fresa</option>
                                    <option value="Vainilla">Vainilla</option>
                                    <option value="Chocolate">chocolate</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group d-flex justify-content-center" style="margin:10px;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <label for="sabor2">Agregar segundo sabor:</label><br>
                                <select name="sabor2" v-model="sabor2" class="form-select" aria-label="Default select example">    
                                    <option value="Ninguno" selected >Ninguno</option>
                                    <option value="Limon">Limon</option>
                                    <option value="Fresa">Fresa</option>
                                    <option value="Vainilla">Vainilla</option>
                                    <option value="Chocolate">chocolate</option>     
                                </select>
                            </div>
                        </div>

                        <div class="form-group d-flex justify-content-center" style="margin:10px;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <label form-label for="adornos">Agregar Adornos:</label>
                                <select v-model="adorno" name="adornos" class="form-select" aria-label="Default select example">    
                                    <option selected disabled>Ninguno</option>
                                    <option value="Felicidades">Felicidades</option>
                                    <option value="Forma del P.">Forma del pastel</option>
                                    <option value="Pisos">Varios Pisos</option>
                                    <option value="Mensaje como nota">Algún mensaje</option>   
                                </select>
                            </div>
                        </div>

                        <div class="form-group d-flex justify-content-center" style="margin:10px;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <label for="adornos2">Agregar otro Adornos:</label>
                                <select v-model="adorno2" name="adornos2" class="form-select" aria-label="Default select example">     
                                    <option selected >Ninguno</option>
                                    <option value="Felicidades">Felicidades</option>
                                    <option value="Forma del P.">Forma del pastel</option>
                                    <option value="Pisos">Varios Pisos</option>
                                    <option value="Mensaje como nota">Algún mensaje</option>    
                                </select>
                            </div>
                        </div>



                        <div class="form-group d-flex justify-content-center" style="margin:10px;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                              
                                <textarea class="form-control" v-model="mensaje" placeholder="Introduce el mensaje o detalles de tu pedido" rows="7" name="nota" ></textarea>
                            </div>
                        </div>



                        <div class="form-group d-flex justify-content-center" style="margin:10px;">
                            <div class="col-md-12 text-center">
                                 <input type="submit" value="Enviar" title="submit" class="btn btn-primary btn-lg">
                            </div>
                        </div>
                    
                </form>
            </div>
        </div>
    </div>
</div>

</template>


<script>

import PedidoCpDatos from '@/components/PedidoCpDatos.vue'
import PedidoCpSabores from '@/components/PedidoCpSabores.vue'
import PedidoCpAdornos from '@/components/PedidoCpAdornos.vue'



export default {
    name: 'PedidoView',
    components:{
        PedidoCpDatos, PedidoCpSabores,PedidoCpAdornos
    },
    methods:{
    addOrden(){
      this.$store.state.nombre = this.nombre;
      this.$store.state.tel = this.tel;
      this.$store.state.correo = this.correo;
      this.$store.state.sabor = this.sabor;
      this.$store.state.sabor2 = this.sabor2;
      this.$store.state.adorno = this.adorno;
      this.$store.state.adorno2 = this.adorno2;
      this.$store.state.mensaje = this.mensaje;
      this.$store.dispatch('addOrdenAction');
      console.log(this.nombre+" ::::"+ this.tel)
      //this.$router.push('/pastelero');

    }

    }
    

}

   

</script>

<style>
select:invalid {
     color: gray; 
     }

.formt{
    margin-bottom: 5px; 
    width: 50%;
}

</style>