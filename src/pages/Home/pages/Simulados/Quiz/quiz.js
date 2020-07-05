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

export default function Quiz({ navigation }) {
    return (
        <View style={styles.background}>
            <View>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: "#fff", padding: 40, marginTop: 10, alignItems:'center' }}>A imagem a seguir, representa qual operação de navegação: </Text>
            </View>

                <Image style={{position:'absolute', top:150, width:350, height:170, left:20, borderRadius:5}} source={require('./questao.png')}/>
            
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz3')} style={styles.btnSubmit1}>
                    <Text style={styles.submitText}>Mantendo posição</Text> 
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Quiz2')} style={styles.btnSubmit2}>
                    <Text style={styles.submitText}>Devagar a vante</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Quiz4')} style={styles.btnSubmit3}>
                    <Text style={styles.submitText}>Toda força a vante</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Quiz5')} style={styles.btnSubmit4}>
                    <Text style={styles.submitText}>Toda força a vante</Text>
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
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 350,
    },
    btnSubmit2: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '105%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 420,
    },
    btnSubmit3: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '105%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 490,
    },
    btnSubmit4: {
        position: 'absolute',
        backgroundColor: '#fff',
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
    }
});