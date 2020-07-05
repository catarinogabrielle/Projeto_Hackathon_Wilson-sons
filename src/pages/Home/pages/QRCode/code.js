import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

export default function Code({ navigation }) {
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
                <TouchableOpacity style={{position:'absolute', width:97, height:19,  top:270, left:-20, marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:14, color:'#FFAC30'}}>Caracteristicas</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Code2')} style={{position:'absolute', width:97, height:19,  top:270, alignItems:'center', marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:14, color:'#9C9C9C'}}>Dicas</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Code3')} style={{position:'absolute', width:97, height:19,  top:270, left:250, marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:14, color:'#9C9C9C'}}>Contribua</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems:'center', backgroundColor:'#31468F', height:10, width:400, borderRadius:7, marginBottom:20}}></View>

            <ScrollView>
                <View style={styles.btn}>
                    <Text style={styles.nome}>Tração Estática Máxima</Text>
                    <Text style={styles.pontos}>80 Toneladas</Text>
                </View> 

                <View style={styles.btn}>
                    <Text style={styles.nome}>Comprimento</Text>
                    <Text style={styles.pontos}>32,7 metros</Text>
                </View>

                <View style={styles.btn}>
                    <Text style={styles.nome}>Potêncial total</Text>
                    <Text style={styles.pontos}>5050 Bkw</Text>
                </View>

                <View style={styles.btn}>
                    <Text style={styles.nome}>Velocidade máxima</Text>
                    <Text style={styles.pontos}>14,3 nós</Text>
                </View>

                <View style={styles.btn}>
                    <Text style={styles.nome}>Vau</Text>
                    <Text style={styles.pontos}>12,82 metros Toneladas</Text>
                </View>

                <View style={styles.btn}>
                    <Text style={styles.nome}>Tração Estática Máxima</Text>
                    <Text style={styles.pontos}>80 Toneladas</Text>
                </View> 

                <View style={styles.btn}>
                    <Text style={styles.nome}>Comprimento</Text>
                    <Text style={styles.pontos}>32,7 metros</Text>
                </View>

                <View style={styles.btn}>
                    <Text style={styles.nome}>Potêncial total</Text>
                    <Text style={styles.pontos}>5050 Bkw</Text>
                </View>

                <View style={styles.btn}>
                    <Text style={styles.nome}>Velocidade máxima</Text>
                    <Text style={styles.pontos}>14,3 nós</Text>
                </View>

                <View style={styles.btn}>
                    <Text style={styles.nome}>Vau</Text>
                    <Text style={styles.pontos}>12,82 metros Toneladas</Text>
                </View>
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
        height:70,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginBottom:15
    },
});