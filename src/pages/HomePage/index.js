import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { firebase, auth } from '../../../services/firebaseConfig';


function HomePage() {

    const navigation = useNavigation()

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
    
    return(
        <View style={styles.container}>
            <Text> Email: {firebase.auth().currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
            > 
                <Text style={styles.buttom}>Sing out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    buttom: {
        marginTop: 40,
        fontSize: 18,
        color: "#E9FFF9",
        padding: 7,
        width: 200,
        height: 42,
        backgroundColor: "#467599",
        textAlign: 'center',
    },
})

export default HomePage;