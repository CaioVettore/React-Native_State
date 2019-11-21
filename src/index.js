import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class userName extends Component {
    state = {
        name: ''
    }
    render() {

        const { name } = this.state
        return (
            <View>
                <TextInput placeholder="Digite seu nome " onChangeText={(Text) => this.setState({ name: Text })} />
                <Text>Your Name: {this.state.name}</Text>
            </View>

        )
    }

}
export default userName