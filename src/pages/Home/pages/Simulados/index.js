import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

export default function Simulados({ navigation }) {
    return (
        <View style={styles.background}>  
            
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.options}>
                <Text style={{fontSize:25, fontWeight:'bold', color:'#fff'}}>Começar simulado</Text>
            </TouchableOpacity>  

            <View style={{marginBottom:20, alignItems:'center'}}>
                <Image onPress={ () => ('') } style={{width:80,height:80 }} source={require('./perfil.png')}/>
                <Text style={styles.textNome}>Luiz Gustavo</Text>
                <Text style={{position:'relative', color:'#fff', fontSize:15}}>9° Lugar</Text>
                <Text style={styles.textPontos}>512 pontos</Text>
            </View>

            <View style={{alignItems:'center', backgroundColor:'#31468F', height:10, width:400, borderRadius:7, marginBottom:20}}></View>

            <ScrollView>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Joaquin</Text>
                    <Text style={styles.pontos}>1570 pontos</Text>
                    <Text style={{ position:'absolute', left:30, fontSize:20, color:'#fff'}}>1</Text>
                    <Image style={{width:55,height:55, position:'absolute', left:80}} source={require('./perfil.png')}/>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:50}} source={require('./proximo.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Paulo</Text>
                    <Text style={styles.pontos}>1500 pontos</Text>
                    <Text style={{ position:'absolute', left:30, fontSize:20, color:'#fff'}}>2</Text>
                    <Image style={{width:55,height:55, position:'absolute', left:80}} source={require('./perfil.png')}/>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:50}} source={require('./proximo.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Gabriel</Text>
                    <Text style={styles.pontos}>1497 pontos</Text>
                    <Text style={{ position:'absolute', left:30, fontSize:20, color:'#fff'}}>3</Text>
                    <Image style={{width:55,height:55, position:'absolute', left:80}} source={require('./perfil.png')}/>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:50}} source={require('./proximo.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Rafael</Text>
                    <Text style={styles.pontos}>1400 pontos</Text>
                    <Text style={{ position:'absolute', left:30, fontSize:20, color:'#fff'}}>4</Text>
                    <Image style={{width:55,height:55, position:'absolute', left:80}} source={require('./perfil.png')}/>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:50}} source={require('./proximo.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Lucas</Text>
                    <Text style={styles.pontos}>989 pontos</Text>
                    <Text style={{ position:'absolute', left:30, fontSize:20, color:'#fff'}}>5</Text>
                    <Image style={{width:55,height:55, position:'absolute', left:80}} source={require('./perfil.png')}/>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:50}} source={require('./proximo.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Pedro</Text>
                    <Text style={styles.pontos}>982 pontos</Text>
                    <Text style={{ position:'absolute', left:30, fontSize:20, color:'#fff'}}>6</Text>
                    <Image style={{width:55,height:55, position:'absolute', left:80}} source={require('./perfil.png')}/>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:50}} source={require('./proximo.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Samuel</Text>
                    <Text style={styles.pontos}>905 pontos</Text>
                    <Text style={{ position:'absolute', left:30, fontSize:20, color:'#fff'}}>7</Text>
                    <Image style={{width:55,height:55, position:'absolute', left:80}} source={require('./perfil.png')}/>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:50}} source={require('./proximo.png')}/>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );  
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems:'center',
        backgroundColor: '#1E306E'
    }, 
    options:{
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFAC30',
        height:60,
        width:400,
        borderRadius:7,
        top:10,
        marginBottom:40,
    },
    textNome:{
        color:'#fff',
        fontSize:30
    },
    textPontos:{
        color:'#fff',
        fontSize:20
    },
    nome: {
        color: '#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    pontos: {
        color: '#fff',
        fontSize:11,
        fontWeight:'bold'
    },
    btn: { 
        width:400,
        backgroundColor:'#31468F',
        height:80,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20
    },
});