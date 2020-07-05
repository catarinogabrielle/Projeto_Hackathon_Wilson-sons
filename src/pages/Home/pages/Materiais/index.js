import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

export default function Material({ navigation }) {
    return (
        <View style={styles.background}>  
            <View style={styles.options}>
                <Text style={{fontSize:30, fontWeight:'bold', color:'#fff'}}>Acesse os materiais</Text>
            </View> 

            <View style={{alignItems:'center', backgroundColor:'#31468F', height:10, width:400, borderRadius:7, marginBottom:20}}></View>

            <ScrollView>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Normas Regulamentadoras</Text> 
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Manuais de operações</Text>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Manuais de máquinas</Text>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Normas Regulamentadoras</Text> 
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Manuais de operações</Text>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Manuais de máquinas</Text>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Normas Regulamentadoras</Text> 
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Manuais de operações</Text>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Manuais de máquinas</Text>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Normas Regulamentadoras</Text> 
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Manuais de operações</Text>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.nome}>Manuais de máquinas</Text>
                    <Image onPress={ () => ('') } style={{width:20,height:20, position:'absolute', right:20}} source={require('./baixar.png')}/>
                </TouchableOpacity> 
            </ScrollView>
        </View>
    );  
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems:'center',
        backgroundColor: '#4769E0'
    }, 
    options:{
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        width:400,
        borderRadius:7,
        top:30,
        marginBottom:60,
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
        color: '#000',
        fontSize:20,
        fontWeight:'bold'
    },
    btn: { 
        width:350,
        backgroundColor:'#fff',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
        borderRadius:7
    },
});