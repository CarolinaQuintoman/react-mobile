import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
        <View style={styles.headerContainer} >
        <Image 
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQDkB1FFdwJ0SyoLZCChLhgLTagOX2SB4xg&usqp=CAU"}} 
        style={styles.image}/>
        </View>
        <View style={styles.content}>
            <Text style={styles.title} >Welcome back, User!!!</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingBottom: 5
    },
    headerContainer:{
        backgroundColor: "#63A4FF",
        height:50,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft:12,
        paddingRight:12
    },
    image: {
        width: 40,
        height: 40,
       
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        fontSize: 40,
        color: "blue"
    }
})

export default HomeScreen