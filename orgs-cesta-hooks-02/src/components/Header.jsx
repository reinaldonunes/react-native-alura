import React from "react"
import { View, Text, Image, StyleSheet } from 'react-native'

import { loadHeader } from '../services/loadData'
import logo from '../assets/logo.png'

class Header extends React.Component{
    state = {
        header: {
            welcome: '',
            legend: ''
        },
    }

    updateHeader(){
        const result = loadHeader()
        this.setState({ header: result})
    }

    componentDidMount() {
        this.updateHeader()
    }

    render (){
        return <View style={style.header}>
            <Image source={logo} style={style.brand} />
            <Text style={style.welcome}>{this.state.header.welcome}</Text>
            <Text style={style.legend}>{this.state.header.legend}</Text>
        </View>
    }
}

const style = StyleSheet.create({
    brand: {
        width: 70,
        height: 28
    },
    header: {
        display: "flex",
        padding: 16,
        backgroundColor: "#efefef"
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646"
    },
    legend: {
        fontSize: 16,
        lineHeight: 26,
        color: "#a3a3a3"
    }
})

export default Header