import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DATA = [
    {
        dt_text: '2021-07-01 12:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55,
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_text: '2022-07-01 15:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55,
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_text: '2023-07-01 18:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55,
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
]

const Item = (props) => {
    const { dt_text, min, max, condition } = props;
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_text}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {
    
    const renderItem = ({ item }) => (
        <Item 
        condition={item.weather[0].main} 
        dt_text={item.dt_text} 
        min={item.main.temp_min} 
        max={item.main.temp_max} />
    )

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../assets/clouds-g91498649e_1920.jpg')} >
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.dt_text}
                    ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: 'rgba(0,0,0,0.5)' }} />}
                />
            </ImageBackground> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: 'pink'
    },
    temp: {
        fontSize: 20,
        color: 'white'
    },
    date: {
        fontSize: 15,
        color: 'white'
    },
    image: {
        flex: 1,
    }

})

export default UpcomingWeather;