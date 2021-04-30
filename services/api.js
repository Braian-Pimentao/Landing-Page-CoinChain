import API_URL from "./api.config"
import axios from "axios"

async function apiGet(arrayCriptos,arrayMonedas){
    
    let criptos = arrayCriptos[0]
      for (var i = 1; i<= arrayCriptos.length-1;i++){
          criptos +=","+arrayCriptos[i];
      }

      
      let monedas = arrayMonedas[0]
      for (var i = 1; i<= arrayMonedas.length-1;i++){
          monedas +=","+arrayMonedas[i];
      }
      

      const urlCall = API_URL + criptos + "&tsyms=" + monedas

      try {
        const response = await axios.get(urlCall)
        return response
      } catch (error) {
        console.log(error)
      }
}

const api = {}

api.getCryptos = (cryptosSelect,monedasSelect) => {
    return apiGet(cryptosSelect,monedasSelect)
}

export default api