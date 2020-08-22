import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Songkhla ', code: '90000' },
    { place: 'Satun', code: '91000' },
    { place: 'Trang', code: '92000' },
    { place: 'Pattani', code: '94000' },
    { place: 'Yala', code: '95000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chiangmai', code: '50000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => (
        navigation.navigate('Weather', { zipCode: code })
    )} style={styles.item}>
        <View style={styles.zipItem}>
            <Text style={styles.text}>{place}</Text>
            <Text style={styles.text}>{code}</Text>
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
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
        backgroundColor: 'white',
        opacity: 0.8,
        marginVertical: 8,
        marginHorizontal: 16,
    },
})
