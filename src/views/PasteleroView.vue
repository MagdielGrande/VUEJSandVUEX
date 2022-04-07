<template>
   <table style="width:100%">
    <tr>

    <th scope="row">Ordenes</th>

    <th>Nombre:</th>

    <th>Telefono:</th>

    <th>Email:</th>

      <th>Sabor principal:</th>

        <th>Segundo sabor</th>

          <th>Adorno principal</th>

            <th>Adorno Secundario</th>

              <th>Mensaje:</th>

  </tr>
  <tr>

    <th><ul>
    <li v-for="(nombre, index) in $store.state.nombres"
    :key="index">
    {{ index }}
    </li>
  </ul></th>

    <td>  <ul>
    <li v-for="(nombre, index) in $store.state.nombres"
    :key="index">
    {{ nombre }}
    </li>
  </ul></td>

    <td>    <ul>
    <li v-for="(tel, index) in $store.state.telefonos"
    :key="index">
    {{ tel }}
    </li>
  </ul></td>

    <td> <ul>
    <li v-for="(correo, index) in $store.state.correos"
    :key="index">
    {{ correo }}
    </li>
  </ul></td>
  <td> <ul>
    <li v-for="(sabor, index) in $store.state.sabores"
    :key="index">
    {{ sabor }}
    </li>
  </ul></td>


  <td> <ul>
    <li v-for="(sabor2, index) in $store.state.sabores2"
    :key="index">
    {{ sabor2 }}
    </li>
  </ul></td>

  <td> <ul>
    <li v-for="(adorno, index) in $store.state.adornos"
    :key="index">
    {{ adorno }}
    </li>
  </ul></td>

  <td> <ul>
    <li v-for="(adorno2, index) in $store.state.adornos2"
    :key="index">
    {{ adorno2 }}
    </li>
  </ul></td>

  <td> <ul>
    <li v-for="(mensaje, index) in $store.state.mensajes"
    :key="index">
    {{ mensaje }}
    </li>
  </ul></td>


  </tr>

</table>
</template>

<script>
export default {
    
}
</script>

<style>
ul{
  background-color: rgb(185, 185, 185);
  
}
li{
  list-style: none;
  color:white;
}
</style>