import React, { useState, useEffect } from 'react';
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

export default function CursosPage1({ navigation }) {
  return (
    <View style={styles.background}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#fff", padding: 30, marginTop: 10 }}>Desenvolva o seu conhecimento</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Cursopag2')} style={styles.btnSubmit1}>
          <Text style={styles.submitText}>Segurança do trabalho</Text>
          <Text style={{ fontSize: 18, color: "#000", marginTop: 5 }}>3 cursos disponíveis</Text>
          <Image style={{ width: 35, height: 35, position: 'absolute', left: 295 }} source={require('./proximo.png')} />
          <Image style={{ width: 46, height: 46, position: 'absolute', left: 15, top: 20 }} source={require('./navio.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cursopag2')} style={styles.btnSubmit2}>
          <Text style={styles.submitText}>Manutenção</Text>
          <Text style={{ fontSize: 18, color: "#000", marginTop: 5 }}>5 cursos disponíveis</Text>
          <Image style={{ width: 35, height: 35, position: 'absolute', left: 295 }} source={require('./proximo.png')} />
          <Image style={{ width: 46, height: 46, position: 'absolute', left: 15, top: 20 }} source={require('./navio.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cursopag2')} style={styles.btnSubmit3}>
          <Text style={styles.submitText}>Ética corporativa</Text>
          <Text style={{ fontSize: 18, color: "#000", marginTop: 5 }}>2 cursos disponíveis</Text>
          <Image style={{ width: 35, height: 35, position: 'absolute', left: 295 }} source={require('./proximo.png')} />
          <Image style={{ width: 46, height: 46, position: 'absolute', left: 15, top: 20 }} source={require('./navio.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cursopag2')} style={styles.btnSubmit4}>
          <Text style={styles.submitText}>Controle emocional</Text>
          <Text style={{ fontSize: 18, color: "#000", marginTop: 5 }}>4 cursos disponíveis</Text>
          <Image style={{ width: 35, height: 35, position: 'absolute', left: 295 }} source={require('./proximo.png')} />
          <Image style={{ width: 46, height: 46, position: 'absolute', left: 15, top: 20 }} source={require('./navio.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#4769E0'
  },
  container: {
    flex: 1,
    position: "absolute",
    margin: 20,
    width: '90%',
    paddingBottom: 50,
    padding: 10
  },
  btnSubmit1: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '105%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 130,
  },
  btnSubmit2: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '105%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 230,
  },
  btnSubmit3: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '105%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 330,
  },
  btnSubmit4: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '105%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 430,
  },
  submitText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});