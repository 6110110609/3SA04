import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { weatherConditions } from './WeatherConditions';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Forecast(props) {

    let mainweather = '';

    if (props.main == 'Rain') {
        mainweather = weatherConditions['Rain'].icon;
    }
    if (props.main == 'Clear') {
        mainweather = weatherConditions['Clear'].icon;
    }
    if (props.main == 'Thunderstorm') {
        mainweather = weatherConditions['Thunderstorm'].icon;
    }
    if (props.main == 'Clouds') {
        mainweather = weatherConditions['Clouds'].icon;
    }
    if (props.main == 'Windy') {
        mainweather = weatherConditions['Windy'].icon;
    }
    if (props.main == 'Fog') {
        mainweather = weatherConditions['Fog'].icon;
    }

    return (
        <View>
            <View>
                <MaterialCommunityIcons
                    size={72}
                    name={mainweather}
                    color={'#fff'}
                    style={styles.seticon}
                />
                <Text style={styles.text}>'{props.name}'</Text>
                <Text style={styles.text}>{props.main}</Text>
                <Text style={styles.text}>{props.description}</Text>
                <Text style={styles.text}>{props.temp} °C</Text>
                <Text style={styles.text1}>Max: {props.tempmax} °C  Min: {props.tempmin} °C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 320,
        height: 150,
    },
    seticon: {
        paddingLeft: 95,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    text1: {
        fontSize: 17,
        textAlign: 'center',
        color: 'white'
    }
})











