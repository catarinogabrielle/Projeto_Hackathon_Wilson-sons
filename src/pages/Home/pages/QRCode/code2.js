import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

export default function Code2({ navigation }) {
    return (
        <View style={styles.background}> 
            <TouchableOpacity onPress={ () => navigation.navigate('Home')}>
                <Image style={{width:20, height:20, marginTop:20, marginLeft:340 }} source={require('./fechar.png')}/>
            </TouchableOpacity>   

            <View style={{marginBottom:60, alignItems:'center',}}>
                <Image onPress={ () => ('') } style={{width:200,height:200 }} source={require('./boat.png')}/>
                <Text style={styles.textNome}>Rebocador ASD 3212</Text>
            </View>

            <View style={{position:'absolute', width:315, height:24, alignItems:'center', top:20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Code')}  style={{position:'absolute', width:97, height:19,  top:270, left:-20, marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:14, color:'#9C9C9C'}}>Caracteristicas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{position:'absolute', width:97, height:19,  top:270, alignItems:'center', marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:14, color:'#FFAC30'}}>Dicas</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Code3')} style={{position:'absolute', width:97, height:19,  top:270, left:250, marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:14, color:'#9C9C9C'}}>Contribua</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems:'center', backgroundColor:'#31468F', height:10, width:400, borderRadius:7, marginBottom:20}}></View>

            <ScrollView>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Cuidados ao abastecer        143</Text>
                    <Image style={{width:20,height:20, position:'absolute', left:280}} source={require('./proximo.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Alta estabilidade e     manobrabilidade</Text>
                    <Image style={{width:20,height:20, position:'absolute', left:280}} source={require('./proximo.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Partida no motor                      36</Text>
                    <Image style={{width:20,height:20, position:'absolute', left:280}} source={require('./proximo.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Detalhe na manobra                82</Text>
                    <Image style={{width:20,height:20, position:'absolute', left:280}} source={require('./proximo.png')}/>
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
        fontSize:35,
        marginBottom:10
    },
    textPontos:{
        color:'#fff',
        fontSize:20
    },
    nome: {
        color: '#0F1E52',
        fontSize:18,
        fontWeight:'bold',
        marginLeft:12
    },
    btn: {
        width:320,
        backgroundColor:'#fff',
        height:60,
        justifyContent:'center',
        borderRadius:10,
        marginBottom:15
    },
});