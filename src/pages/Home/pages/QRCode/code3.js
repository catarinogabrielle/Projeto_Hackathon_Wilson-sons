import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Code3({ navigation }) {
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

                <TouchableOpacity onPress={() => navigation.navigate('Code2')}  style={{position:'absolute', width:97, height:19,  top:270, alignItems:'center', marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:14, color:'#9C9C9C'}}>Dicas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{position:'absolute', width:97, height:19,  top:270, left:250, marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:14, color:'#FFAC30'}}>Contribua</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems:'center', backgroundColor:'#31468F', height:10, width:400, borderRadius:7, marginBottom:20}}></View>

            <View>
                <View>
                    <Text style={{color:'#fff', fontSize:18, fontWeight:'bold', marginBottom:5}}>Título</Text>
                </View>
                <TextInput style={styles.btn}
                autoCorrect={false}
                onChangeText={() => { }}/>
            </View>

            <View>
                <View>
                    <Text style={{color:'#fff', fontSize:18, fontWeight:'bold', marginBottom:5}}>Descrição</Text>
                </View>
                <TextInput style={styles.btn2}
                autoCorrect={false}
                onChangeText={() => { }}/>
            </View>

            <View>
                <View>
                    <Text style={{color:'#fff', fontSize:18, fontWeight:'bold', marginBottom:5}}>Modelo</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.btn3}>
                        <Text style={{fontSize:15, fontWeight:'bold', color:'#0F1E52'}}>Rebocador ASD 3212</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
        fontSize:20,
        fontWeight:'bold'
    },
    pontos: {
        color: '#0F1E52',
        fontSize:18,
        fontWeight:'bold'
    },
    btn: {
        width:320,
        backgroundColor:'#fff',
        height:40,
        marginBottom:15
    },
    btn2: {
        width:320,
        backgroundColor:'#fff',
        height:90,
        marginBottom:15
    },
    btn3: {
        width:200,
        backgroundColor:'#fff',
        height:40,
        marginBottom:15,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center'
    },
});