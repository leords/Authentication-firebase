import React, { useState, useEffect } from "react";
import {View, Text, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from "react-native";

import {firebase, auth} from '../../../services/firebaseConfig';
import { useNavigation } from "@react-navigation/native";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect( () => {
        const unsubcribe = firebase.auth().onAuthStateChanged(user => {
            if(user) {
                navigation.replace("Home")
            }
        })

        return unsubcribe
    }, [])

    const handleSignUp = () => {
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log('Registrado usúario:', user.email)
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log('Logado usuario:', user.email)
        })
        .catch(error => alert(error.message))
    }



    return(
       <View style={styles.container}>
           <View style={styles.containerLogo}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/img/logo-firebase.png')}
                >                   
                </Image>
           </View> 
           <View style={styles.containerForm}>
               <View style={styles.form}>

                    <Text style={styles.textForm}> Email </Text>
                    <TextInput 
                        style={styles.inputForm}
                        placeholder="email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        >
                    </TextInput>

                    <Text style={styles.textForm}> Senha </Text>
                    <TextInput
                        style={styles.inputForm}
                        placeholder="********"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        >
                    </TextInput>

                    <TouchableOpacity 
                        onPress={handleLogin}
                        style={styles.buttomLogin}
                    >
                        <Text style={styles.buttomTextLogin}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={handleSignUp}
                        style={styles.buttomCreate}
                    >
                        <Text style={styles.buttomTextCreate}>
                            Registrar-se
                        </Text>
                    </TouchableOpacity>

               </View>
           </View>
       </View> 
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    containerLogo: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120
    },
    containerForm: {
        flex: 3,
        width: '100%',
        alignItems:'center',
    },
    form: {
        width: '70%',
        height: '60%',
        padding: 5,
        justifyContent:'center'
    },
    textForm: {
        fontSize: 14,
        padding: 2,
        color: '#467599'
    },
    inputForm: {
        paddingStart: 10,
        width:'100%',
        height: 42,
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius: 5
    },
    buttomLogin: {
        marginTop: 30,
        color: "#E9FFF9",
        padding: 7,
        height: 42,
        backgroundColor: "#467599",
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttomCreate: {
        marginTop: 10,
        color: "#E9FFF9",
        padding: 7,
        height: 42,
        backgroundColor: "#fff",
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#467599'        
    },
    buttomTextLogin: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    buttomTextCreate: {
        fontSize: 14,
        color: '#467599',
        textAlign: 'center',
    }

})