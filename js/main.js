const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data() {
        return {
          busqueda:null
        }
      },
      methods: {
          async Buscar(){
          const response = await fetch(API + 'charlimora')
          const data = await response.json()
          console.log(data)
      }
      }
})