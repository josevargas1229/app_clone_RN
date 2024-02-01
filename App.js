import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, TextInputBase, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
    </View>
  );
}

export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
      <Image style={styles.logoE} source={require('./assets/logo_contigo.png')}/>
    </View>
  )
}

export const Login=()=>{
  return(
    <View>
      <TextInput style={styles.textIn} placeholder='Email' autoComplete='email' enterKeyHint='search' inputMode='email'/>
      <TextInput style={styles.textIn} placeholder='Contraseña' textContentType='password' secureTextEntry={true}/>
      <Text style={styles.textPass}>¿Olvidaste la contraseña?</Text>
      <Boton 
        texto={'Ingresar'} 
        accion={()=>Alert.alert('Boton de login')}
        colorA={'red'} colorB={'#00905F'}
      />
    </View>
  );
};

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
      <Login/>
    </View>
  )
}

export const Pie=()=>{
  //Se puede tener varias operaciones antes
  return(
    <View style={styles.pie}>
      <Text style={styles.textoP}>Conéctate también con</Text>
      <Registros/>
      <Registrar/>
      <Text style={styles.textoP}>Ver. 4.2.0</Text>
    </View>
  )
}
export const Registrar=()=>{
  return(
    <View style={styles.textRegistrar}>
      <Text style={styles.textoP2}>¿Aún no tienes cuenta?</Text>
      <Text style={styles.textPass}>Registrate</Text>
    </View>
  )
}
export const Registros=()=>{
  return(
    <View style={styles.reg}>
      <Image style={styles.logoR} source={require('./assets/apple-icon.png')}/>
      <Image style={styles.logoR} source={require('./assets/google-icon.png')}/>
    </View>
    )
}
//pasar propiedades a un componentes
//forma 1, recibimos un objeto dentro de los parámetros y desestructuramos el objeto dentro de la funcion
export const Pie2=(props)=>{
  //Se puede tener varias operaciones antes
  return(
    <View style={styles.pie}>
      <Text style={styles.texto}>{props.opA}</Text>
      <Text style={styles.texto}>{props.opB}</Text>
      <Text style={styles.texto}>{props.opC}</Text>
      <Text style={styles.texto}>{props.opD}</Text>
    </View>
  )
}
//forma 2, desestructuramos el objeto dentro de los parámetros, y llamamos las variables
export const Pie3=({op1,op2,op3,op4})=>{
  //Se puede tener varias operaciones antes
  return(
    <View style={styles.pie}>
      <Text style={styles.texto}>{op1}</Text>
      <Text style={styles.texto}>{op2}</Text>
      <Text style={styles.texto}>{op3}</Text>
      <Text style={styles.texto}>{op4}</Text>
    </View>
  )
}

export const Boton=({texto,accion,colorA,colorB})=>{
  return(
    <Pressable 
      style={({pressed})=>[{
        backgroundColor:pressed? colorA : colorB,
        margin:pressed?10:15
      }
      ,styles.boton]}
      onPress={accion}
    >
      
      <Text style={styles.textoB}>{texto}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center'
  },
  texto:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold',
  },
  encabezado:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    padding:20,
    borderRadius:10
  },
  cuerpo:{
    flex:8
  },
  pie:{
    flex:3,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center'
  },
  boton:{
    padding:13,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    borderRadius:50
  },
  textoB:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  logoB:{
    height:35,
    width:35,
    marginRight:7
  },
  textIn:{
    borderColor:'#D8D8D8',
    borderWidth:1,
    margin:10,
    marginLeft:15,
    marginRight:15,
    padding:14,
    borderRadius:7
  },
  textoP:{
    color:'#D8D8D8'
  },
  textoP2:{
    color:'black',
    fontWeight:'bold'
  },
  textPass:{
    alignSelf:'flex-end',
    marginLeft:15,
    color:'#48846F',
    marginBottom:13
  },
  logoE:{
    width:'100%',
    height:'100%',
    resizeMode:'center',
  },
  logoR:{
    height:30,
    width:30,
    borderRadius:10,
    marginRight:10,
  },
  reg:{
    flexDirection:'row'
  },
  textRegistrar:{
    flexDirection:'row'
  }
});
