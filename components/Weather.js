import React, { useState , useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
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
                    temp: json.main.temp});
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    return (
        <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
            <View style={styles.background}>
                <Text style={styles.text}>Zip code is {props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
    )
}

 
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        color:'white'
    },
    background: {
        backgroundColor: 'black',
        opacity:0.6,
        padding: 50,
        width:'100%',
    }
})