const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data() {
        return {
          busqueda: null,
          result: null,
          error: null,
          favoritos:new Map()
        };
      },

      created(){
        const FavoritosGuardados = JSON.parse(window.localStorage.getItem("misfavoritos"))
  
       if(FavoritosGuardados?.length){
        const favoritRebuild = new Map(FavoritosGuardados.map(alias=>[alias.id,alias]))
        this.favoritos = favoritRebuild //esto solo sucederá si hay algo en localStorage
       }    
      },

      computed: { //prpiedades computadas
        esFavorito() {
          return this.favoritos.has(this.result.id)
        },

        TodosFavoritos(){
          return Array.from(this.favoritos.values())
        }
      },

      methods: {
          async Buscar(){
            //con la siguiente línea empezamos limpiando todo
            this.result = this.error = null
            try {
              const response = await fetch(API + this.busqueda)
              if(!response.ok) throw new Error("Usuario no encontrado")
              //console.log(response)
              const data = await response.json()
              console.log(data)
            //hacemos que result en vez que dé un true, arroje el data
              this.result = data
              
            } catch (error) {
              this.error = error
            } finally {
              this.busqueda = null
            }
          },  //aquí se cierra el método Buscar, se pone coma y seguimos con...

          addFavorito(){
            /*con set establecemos unos valores para el map favoritos, los cuales serán
            el id y ademas, toda la información que viene en result que tras hacer la búsqueda 
            almancena la info del data como ya se programó anteriormente*/
            this.favoritos.set(this.result.id, this.result)
            this.updateStorage()
          },
          RemoverFavorito(){
            this.favoritos.delete(this.result.id)
            this.updateStorage()
          } ,

          MostrarFavorito(parametro){
          //cambio el valor de result por el valor del parámetro que es lo que el usuario va a seleccionar
            this.result = parametro
          },

          updateStorage(){
           window.localStorage.setItem('misfavoritos', JSON.stringify(this.TodosFavoritos))
          }

      }
});