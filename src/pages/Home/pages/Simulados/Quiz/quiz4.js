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

export default function Quiz2({ navigation }) {
    return (
        <View style={styles.background}>
            <TouchableOpacity onPress={ () => navigation.navigate('Simulados')}>
        <Image style={{width:35, height:35, marginTop:10, position:'relative', marginLeft:340 }}  source={require('./navegador.png')}/>
      </TouchableOpacity>

            <View>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: "#fff", padding: 20, alignItems:'center' }}>A imagem a seguir, representa qual operação de navegação: </Text>
            </View>

                <Image style={{position:'absolute', top:150, width:350, height:170, left:20, borderRadius:5}} source={require('./questao.png')}/>
            
            <View style={styles.container}>
                <View style={styles.btnSubmit1}>
                    <Text style={styles.submitText}>Mantendo posição</Text> 
                </View>

                <View style={styles.btnSubmit2}>
                    <Text style={styles.submitText2}>Devagar a vante</Text>
                </View>

                <View style={styles.btnSubmit3}>
                    <Text style={styles.submitText2}>Toda força a vante</Text>
                </View>

                <View style={styles.btnSubmit4}>
                    <Text style={styles.submitText}>Toda força a vante</Text>
                </View>

                <TouchableOpacity style={styles.btnSubmit5}>
                    <Text style={{fontSize:18, color:'#fff'}}>Comentar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSubmit6} onPress={ () => navigation.navigate('Quiz')}>
                    <Text style={{fontSize:18, color:'#fff'}}>Continuar</Text>
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
        backgroundColor: '#cecece',
        width: '105%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 350,
    },
    btnSubmit2: {
        position: 'absolute',
        backgroundColor: '#4A9C45',
        width: '105%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 420,
    },
    btnSubmit3: {
        position: 'absolute',
        backgroundColor: '#B03333',
        width: '105%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 490,
    },
    btnSubmit4: {
        position: 'absolute',
        backgroundColor: '#cecece',
        width: '105%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 560,
    },
    submitText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    submitText2: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnSubmit5: {
        position: 'absolute',
        backgroundColor: '#FFAC30',
        width: '50%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        marginTop: 650,
    },
    btnSubmit6: {
        position: 'absolute',
        backgroundColor: '#4A9C45',
        width: '50%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        marginTop: 650,
        left:190
    },
});