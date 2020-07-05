import React from 'react';
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

export default function Qrcode({ navigation }) {
  return (
    <View style={styles.background}>

        <Image style={{width:349, height:370, borderRadius:12, top:80, opacity:0.4}} source={require('./procurar.jpeg')}/>

        <Image style={{position:'absolute', width:100, height:100, alignItems:'center', top:220}} source={require('./codigo-qr.png')}/>

        <View style={{width:275, height:50, backgroundColor:'#FFAC30', position:'absolute', top:50, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#1E306E', fontSize:24, fontWeight:'bold'}}>Aproxime o QR Code</Text>
        </View>

        <View style={{position:'absolute', height:37, width:231, alignItems:'center', top:480}}>
            <Text style={{color:'#fff', fontSize:24, fontWeight:'bold'}}>Ou digite o modelo</Text>
        </View>
        
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Pesquise o modelo"
            autoCorrect={false}
            onChangeText={() => { }}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Code')} style={{width:120, height:40, backgroundColor:'#FFAC30', position:'absolute', top:60, borderRadius:30, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'#1E306E', fontSize:18, fontWeight:'bold'}}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E306E'
  },
  container: {
    position:'absolute',
    width:350,
    top:540,
    alignItems:'center'

  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 18,
    borderRadius: 20,
    padding: 5
  }
});