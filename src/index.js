import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native'

class userName extends Component {
    state = {
        name: ''
    }
    render() {

        const { name } = this.state
        return (
            <ImageBackground style={styles.backgroundStile}>
                <View>
                    <TextInput style={styles.StyleInput} placeholder="Type your name" onChangeText={(Text) => this.setState({ name: Text })} />
                    <Text style={styles.TextName}>Your Name:</Text>
                    <Text style={styles.TextName}>{this.state.name}</Text>
                </View>
            </ImageBackground>

        )
    }

}
const styles = StyleSheet.create({
    backgroundStile: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#013542',
        flex:1
    },
    StyleInput:{
        backgroundColor:'#6e7085',
        borderRadius:20, 
        marginBottom:'10%',
        color:'#000000',
        fontSize:35
    
        
    },
    TextName:{
        color:'#fff',
        fontSize:35
    }

})
export default userName