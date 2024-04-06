import { View, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = ({navigation}) => {
  const [user, setUser] = useState("");;
  const [password, setPassword] = useState("");

  const handleSignInPress = () =>{
    if (user.trim().length && password.trim().length > 0) {
      if (user === "Carolina" && password === "Caro33") {
        navigation.navigate("Home")
      } else{
        Alert.alert("error", "El usuario y/o contraseña son incorrectos");
        setUser("");
        setPassword("");
      }
    }
  };
  const handleUserChange = (text) => setUser(text);
  const handlePasswordChange = (text) => setPassword(text);
  return (
    <View style={styles.container} >
        <View style={styles.imageContainer} >
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQDkB1FFdwJ0SyoLZCChLhgLTagOX2SB4xg&usqp=CAU"}} style={styles.image}/>
       </View>
       <View style={styles.inputContainer} >
        <TextInput 
            placeholder='user' 
            style={styles.textInput} 
            onChangeText={handleUserChange} 
            value={user}
            />
        <TextInput 
            placeholder='Password' 
            style={styles.textInput} 
            secureTextEntry 
            onChangeText={handlePasswordChange}
            value={password}
            />
       </View>
      <Button style={styles.button} title='Sign In' onPress={handleSignInPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        alignSelf: "center"
    },
    imageContainer:{
        marginTop: 10,
        marginBottom: 10,
    },
    inputContainer:{
        marginTop: 10,
        marginBottom: 10
    },
    textInput:{
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 4,
        marginBottom: 12,
        fontSize: 16,
        color: "#1976D2"
    },
    button:{
        backgroundColor: "#1976D2"
    },
    container:{
        flex: 1,
        justifyContent: "center",
        marginLeft: 18,
        marginRight: 18
    }
})

export default LoginScreen