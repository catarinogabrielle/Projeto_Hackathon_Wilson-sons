import React, {useState, useEffect} from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  KeyboardAvoidingView,  
  TextInput, 
  StyleSheet,
  Animated,
  Keyboard,
  Image
} from 'react-native';

export default function CursoPag2({ navigation }) {
  return (
    <View style={styles.background}>
        <View>
            <Text style={{fontSize:30, fontWeight:'bold', color:"#fff", padding:30, marginTop:10}}>Segurança do Trabalho</Text>
            <Text style={{fontSize:20, color:"#fff", paddingLeft:35, position:"relative"}}>3 cursos disponiveis</Text>
        </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={ () => navigation.navigate('Cursopag3') } style={styles.btnSubmit1}>    
            <Text style={styles.submitText}>Segurança a bordo</Text>
            <Text style={{fontSize:16, color:"#000", paddingLeft:40, paddingRight:8, margin:5 }}>Compreendimento geral sobre a segurança dentro da embarcação</Text>
            <Image style={{width:35,height:35, position:'absolute', left:295}} source={require('./proximo.png')}/>
        </TouchableOpacity>  

        <TouchableOpacity onPress={ () => navigation.navigate('Cursopag3') } style={styles.btnSubmit2}>
            <Text style={styles.submitText}>Utilização de EPI's</Text>
            <Text style={{fontSize:16, color:"#000", paddingLeft:40, paddingRight:40, margin:5 }}>Saiba quais são os equipamentos de EPIs obrigatórios</Text>
            <Image style={{width:35,height:35, position:'absolute', left:295}} source={require('./proximo.png')}/>
        </TouchableOpacity>  

        <TouchableOpacity onPress={ () => navigation.navigate('Cursopag3') } style={styles.btnSubmit3}>
            <Text style={styles.submitText}>Trabalho coletivo</Text>
            <Text style={{fontSize:16, color:"#000", paddingLeft:40, paddingRight:8, margin:5 }}>Quais as medidas necessárias ao trabalhar em grupo?</Text>
            <Image style={{width:35,height:35, position:'absolute', left:295}} source={require('./proximo.png')}/>
        </TouchableOpacity>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: '#4769E0'
  },
  container: {
    flex:1,
    position:"absolute",
    margin:20,
    width:'90%',
    padding:10
  },
  btnSubmit1: {
    position:'absolute',
    backgroundColor: '#fff',
    width:'105%',
    height:100,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    marginTop:160,
  },
  btnSubmit2: {
    position:'absolute',
    backgroundColor: '#fff',
    width:'105%',
    height:100,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    marginTop:290,
  },
  btnSubmit3: {
    position:'absolute',
    backgroundColor: '#fff',
    width:'105%',
    height:100,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    marginTop:420,
  },
  submitText: {
    color: 'black',
    fontSize:20,
    fontWeight:'bold'
  }
});