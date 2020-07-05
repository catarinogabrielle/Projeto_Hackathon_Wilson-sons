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
    ScrollView,
    Image
} from 'react-native';

export default function Ajuda({ navigation }) {
    return (
        <View style={styles.background}>
            <ScrollView>
                <Text style={styles.Text}>
                    Lorem ipsum porttitor suscipit enim himenaeos leo aliquam.
                </Text>

                <Text style={styles.Text}>
                    Lorem ipsum porttitor suscipit enim himenaeos leo aliquam, 
                    fringilla vulputate metus elementum mauris et morbi vestibulum, 
                    nullam aenean proin tempus fringilla tristique. habitasse phasellus 
                    nibh fames purus quisque id velit senectus, taciti lobortis 
                
                </Text>
            
                <Text style={styles.Text}>
                    Lorem ipsum porttitor suscipit enim himenaeos leo aliquam, 
                    fringilla vulputate metus elementum mauris et morbi vestibulum, 
                    nullam aenean proin tempus fringilla tristique. habitasse phasellus 
                    nibh fames purus quisque id velit senectus, taciti lobortis 
                    euismod gravida erat fringilla scelerisque conubia, curae risus 
                </Text>

                <Image style={{width:'100%', height:80}} source={require('./logostand.png')}/>

                <Text style={styles.Text}>
                    Lorem ipsum porttitor suscipit enim himenaeos leo aliquam, 
                    fringilla vulputate metus elementum mauris et morbi vestibulum, 
                    nullam aenean proin tempus fringilla tristique. habitasse phasellus 
                    nibh fames purus quisque id velit senectus, taciti lobortis 
                    euismod gravida erat fringilla scelerisque conubia, curae risus 
                </Text>

                <Text style={styles.Text}>
                    Lorem ipsum porttitor suscipit enim himenaeos leo aliquam.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },
    Text:{
        fontSize:20,
        color:'#fff',
        margin:15
    }
});