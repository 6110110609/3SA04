import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View, Image } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {

    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        tempmax: 'Max',
        tempmin: 'Min',
        name: 'Name',
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=d09aea7844128af0f3d9f4413d828425`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        tempmax: json.main.temp_max,
                        tempmin: json.main.temp_min,
                        name: json.name
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    let pic = '';

    if (props.zipCode == '90000') {
        pic = require("../img/songkhla.jpg");
    }
    if (props.zipCode == '91000') {
        pic = require("../img/satun.jpg");
    }
    if (props.zipCode == '92000') {
        pic = require("../img/trang.jpg");
    }
    if (props.zipCode == '94000') {
        pic = require("../img/pattani.jpg");
    }
    if (props.zipCode == '20000') {
        pic = require("../img/chonburi.jpg");
    }
    if (props.zipCode == '40000') {
        pic = require("../img/khonkaen.jpg");
    }
    if (props.zipCode == '50000') {
        pic = require("../img/chiangmai.jpg");
    }
    if (props.zipCode == '57000') {
        pic = require("../img/chiangrai.jpg");
    }

    return (
        <ImageBackground source={pic} style={styles.backdrop}>
            <View style={styles.background}>
                <Text style={styles.text}>Zip code: {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backdrop: {
        // backgroundColor: {mainweather},
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        color: 'white'
    },
    background: {
        backgroundColor: 'black',
        opacity: 0.6,
        padding: 50,
        width: '100%',
    }
})