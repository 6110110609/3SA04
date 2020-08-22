import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.text}>'{props.name}'</Text>
            <Text style={styles.text}>{props.main}</Text>
            <Text style={styles.text}>{props.description}</Text>
            <Text style={styles.text}>{props.temp} °C</Text>
            <Text style={styles.text1}>Max: {props.tempmax} °C  Min: {props.tempmin} °C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center',
        color:'white'
    },
    text1: {
        fontSize: 17,
        textAlign: 'center',
        color:'white'
    }
})