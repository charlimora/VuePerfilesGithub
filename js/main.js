const API = "https://api.github.com/users/";

async function Buscar(){
    const response = await fetch(API + 'charlimora')
    const data = await response.json()
    console.log(data)
}

const app = Vue.createApp({
    data() {
        return {
          message: 'Hello Vue!'
        }
      }
})