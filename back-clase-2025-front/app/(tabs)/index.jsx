import axios from "axios";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import estilos from "../../assets/Styles/Styles";

import { router } from "expo-router";



import Boton from "../../assets/componentes/boton";

export default function Index() {
  

const [mensajeLocal, setMensaje] = useState("");
function enviarMensaje() {
  const Mensaje = {
    mensaje:mensajeLocal
  }
  axios.post("https://taller-ii-1.onrender.com", Mensaje)
  .then(function(res){
    alert("El mensaje se envió");
    setTimeout(function(){
      router.push("./futuro");
    },1000);
    

  })
  .catch(function(error){
    console.log(error);
    alert("Error al enviar el mensaje");
  })
}

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Bienvenido a la máquina del tiempo</Text>
  <Text style={estilos.texto}>
    A través de esta aplicación vamos a poder enviar un mensaje hacia el
    futuro. Escribe tus ideas y envíalas a tu "yo" en el futuro
  </Text>
  <TextInput
    style={estilos.input}
    placeholder="Escribe tu mensaje..."
    placeholderTextColor="#f47b7b"
    value={mensajeLocal}
    onChangeText={setMensaje} 

    multiline
  />
     <Boton texto="Enviar" funcion={enviarMensaje} />
     
    </View>
  );
}
