import axios from "axios";
import { useState } from "react";
import { Text, View } from "react-native";
import estilos from "../../assets/Styles/Styles";



function Futuro(){

const [mensajeLocal, setMensajeLocal]= useState("");
function traerMensajes(){
axios.get("https://192.168.14.9:5000/recibir")
.then(function(res){
    if(res.data.status){
        setMensajeLocal(res.data.datos.mensajes);
    }
})
.catch(function(error){
    console.log(error);
    alert("Error al traer los mensajes");
})
}



return(
    <View style={estilos.contenedor}>
        <Text style={estilos.titulo}>Tu yo del pasado te dejó este mensaje</Text>
        <View style={estilos.mensajeFuturo}>
 <Text style={estilos.textoMensaje}>Mensaje</Text>
              <Text style={estilos.textoMensaje}>{mensajeLocal}</Text>
        </View>
             

    </View>
)
}

export default Futuro;