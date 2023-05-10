import React from "react";
import { 
    Text, 
    StatusBar, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground,
    View
} from "react-native";

import IconText from "../components/IconText";

const City = () => {
    const {container, imageLayout, countryName, cityName, cityText, 
        populationText, populationWrapper, riseSetText, riseSetWrapper, rowLayout} = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/toronto-city.jpg')} style={imageLayout}>
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText iconName={'user'} bodyText={'8000'} iconColor={'red'} bodyTextStyle={populationText}/>
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName={'sunrise'} bodyText={'10:46:58am'} iconColor={'white'} bodyTextStyle={riseSetText}/>
                    <IconText iconName={'sunset'} bodyText={'17:28:15pm'} iconColor={'white'} bodyTextStyle={riseSetText}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default City;