import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from "react-native";

const City = () => {
    return (
        <SafeAreaView>
            <ImageBackground source={require('../../assets/paris.jpg')} style={{ width: '100%', height: '100%' }}>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default City;