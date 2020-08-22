import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Songkhla ', code: '90000', imgcolor: require('../imgcolor/1.png') },
    { place: 'Satun', code: '91000', imgcolor: require('../imgcolor/2.jpg') },
    { place: 'Trang', code: '92000', imgcolor: require('../imgcolor/3.jpg') },
    { place: 'Pattani', code: '94000', imgcolor: require('../imgcolor/4.jpg') },
    { place: 'Chonburi', code: '20000', imgcolor: require('../imgcolor/5.png') },
    { place: 'Khonkaen', code: '40000', imgcolor: require('../imgcolor/6.png') },
    { place: 'Chiangmai', code: '50000', imgcolor: require('../imgcolor/7.png') },
    { place: 'Chiangrai', code: '57000', imgcolor: require('../imgcolor/8.jpg') },
]

const ZipItem = ({ place, code, navigation, imgcolor}) => (
    <TouchableHighlight onPress={() => (
        navigation.navigate('Weather', { zipCode: code })
    )} style={styles.item}>
        <View style={styles.zipItem}>
            <ImageBackground source={imgcolor} style={styles.bg}>
                <Text style={styles.text}>{place}</Text>
                <Text style={styles.text}>{code}</Text>
            </ImageBackground>
        </View>
    </TouchableHighlight>
)

export default function zipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: '100%'
    },
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
    },
    item: {
        // padding: 5,
        // backgroundColor: 'white',
        opacity: 0.8,
        marginVertical: 8,
        marginHorizontal: 16,
    },
})
