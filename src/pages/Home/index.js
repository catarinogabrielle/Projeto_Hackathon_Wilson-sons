import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.background}>  
            <View style={styles.containerHeade}>
                <Text style={styles.headerTex}>Escola a bordo</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={{width:"100%", height:250, justifyContent:'center', alignItems:'center'}} source={require('../../assets/imagem1.jpeg')}>
                    <TouchableOpacity onPress={ () => navigation.navigate('Login')} style={styles.containerExit}>
                        <Image style={{width:30, height:30, }} source={require('../../assets/sair.png')}/>
                    </TouchableOpacity>

                        <TouchableOpacity onPress={ () => navigation.navigate('Cursos') } style={styles.options}>
                            <Text style={styles.text}>CURSOS</Text>
                        </TouchableOpacity>
                    </ImageBackground>

                    <ImageBackground style={{width:"100%", height:250, justifyContent:'center', alignItems:'center'}} source={require('../../assets/imagem2.jpeg')}>
                        <TouchableOpacity onPress={ () => navigation.navigate('Materiais') } style={styles.options}>
                            <Text style={styles.text}>MATERIAIS</Text>
                        </TouchableOpacity>
                    </ImageBackground>

                    <ImageBackground style={{width:"100%", height:250, justifyContent:'center', alignItems:'center'}} source={require('../../assets/imagem3.jpeg')}>
                        <TouchableOpacity onPress={ () => navigation.navigate('Simulados') } style={styles.options}>
                            <Text style={styles.text}>SIMULADO-RANK</Text>
                        </TouchableOpacity>
                    </ImageBackground>

                    <ImageBackground style={{width:400, height:250, justifyContent:'center', alignItems:'center'}} source={require('../../assets/imagem4.jpeg')}>
                        <TouchableOpacity onPress={ () => navigation.navigate('Qrcode') } style={styles.options}>
                            <Text style={styles.text}>QR CODE</Text>
                        </TouchableOpacity>
                    </ImageBackground>  
                </View>
            </ScrollView>
        </View>
    );  
}

const styles = StyleSheet.create({
    options:{
        backgroundColor: '#FFC672',
        width:'50%',
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
    },
    background: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#1E306E'
    },
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },  
    containerExit: {
        position:'absolute',
        right:20,
        top:20
    }, 
    headerTex: {
        fontWeight:'bold',
        fontSize:30,
        lineHeight:70,
        color:'#FFC672',

    }
});