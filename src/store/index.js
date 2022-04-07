import { createStore, storeKey } from 'vuex'

export default createStore({
  state: {


    telefonos:[],
    nombres:[],
    correos:[],
    sabores:[],
    sabores2:[],
    adornos:[],
    adornos2:[],
    mensajes:[],
    nombre: '',
    tel: '',
    correo:'',
    sabor: '',
    sabor2:'',
    adorno:'',
    adorno2:'',
    mensaje:''
    
  },
  getters: {

  },
  mutations: {
    addOrden (state){
      state.nombres = [state.nombre,...state.nombres]
      state.telefonos = [state.tel,...state.telefonos]
      state.correos = [state.correo,...state.correos]
      state.sabores = [state.sabor,...state.sabores]
      state.sabores2 = [state.sabor2,...state.sabores2]
      state.adornos = [state.adorno,...state.adornos]
      state.adornos2 = [state.adorno2,...state.adornos2]
      state.mensajes = [state.mensaje,...state.mensajes]


    }  
  },
  actions: {
    addOrdenAction(contex){
      contex.commit('addOrden')
    }
  },
  modules: {
  }
})
