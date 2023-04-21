import { View,Text, TextInput, Button  } from "react-native";

export default function Contacts({navigation,route}){
   // const {title, name} = route.params;
    //let mtitle = route.params.title; esta es otra forma de traer las info de las variables
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Text style={{marginBottom:20}}>Contactos</Text>
        </View>
    )
}

//<Text style={{marginBottom:10}}>stamos en contactenos</Text>
//<Text>Titulo: {title}</Text>
///<Text>Nombre completo: {name}</Text>