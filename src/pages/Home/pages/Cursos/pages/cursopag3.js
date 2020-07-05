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

export default function CursoPag3({ navigation }) {
  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={ () => navigation.navigate('Home')}>
        <Image style={{width:35, height:35, marginTop:8, position:'relative', marginLeft:340 }}  source={require('./navegador.png')}/>
      </TouchableOpacity>

      <View>
          <Text style={{fontSize:30, fontWeight:'bold', color:"#fff", marginLeft:30, }}>Segurnaça a bordo</Text>
          <Text style={{fontSize:20, color:"#fff", paddingLeft:34, position:"relative", marginEnd:40, marginTop:10}}>Compreendimento geral sobre a segurança dentro da embarcação</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={ () => ('') } style={styles.btnSubmit}>
          <Text style={styles.textDownload}>Baixar conteudo</Text>
          <Image style={{width:20,height:20, position:'relative', left:75 }} source={require('./baixar.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => ('') } style={styles.btnSubmit1}>
          <Text style={styles.submitText}>Introdução do curso</Text>
          <Image style={{width:35,height:35, position:'absolute', left:15}} source={require('./botao-play.png')}/>
        </TouchableOpacity>  

        <TouchableOpacity onPress={ () => ('') } style={styles.btnSubmit2}>
          <Text style={styles.submitText}>Introdução do curso</Text>
          <Image style={{width:35,height:35, position:'absolute', left:15}} source={require('./botao-play.png')}/>
        </TouchableOpacity>  

        <TouchableOpacity onPress={ () => ('') } style={styles.btnSubmit3}>
          <Text style={styles.submitText}>Introdução do curso</Text>
          <Image style={{width:35,height:35, position:'absolute', left:15}} source={require('./botao-play.png')}/>
        </TouchableOpacity>  

        <TouchableOpacity onPress={ () => ('') } style={styles.btnSubmit4}>
          <Text style={styles.submitText}>Introdução do curso</Text>
          <Image style={{width:35,height:35, position:'absolute', left:15}} source={require('./botao-play.png')}/>
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
    position:"absolute",
    margin:20,
    width:'90%',
    paddingBottom:50,
    padding:10
  },
  btnSubmit1: {
    position:'absolute',
    backgroundColor: '#fff',
    width:'105%',
    height:60,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    marginTop:230,
  },
  btnSubmit2: {
    position:'absolute',
    backgroundColor: '#fff',
    width:'105%',
    height:60,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    marginTop:310,
  },
  btnSubmit3: {
    position:'absolute',
    backgroundColor: '#fff',
    width:'105%',
    height:60,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    marginTop:390,
  },
  btnSubmit4: {
    position:'absolute',
    backgroundColor: '#fff',
    width:'105%',
    height:60,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    marginTop:470,
  },
  submitText: {
    color: 'black',
    fontSize:25,
    fontWeight:'bold'
  },
  btnSubmit: {
    position:'absolute',
    backgroundColor: '#FFAC30',
    width:'60%',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginTop:160,
    marginLeft:150
  },
  textDownload: {
    position:"absolute",
    color: '#fff',
    fontSize:15,
    fontWeight:"bold"
  },
});