import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

const CurrentWeather = () => {
  const { wrapper, container, temp, intervalWrapper, interval, feels, bodyWrapper, description, message} = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={80} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels Like: 5</Text>
        <RowText 
          messageOne={'High: 8'} 
          messageTwo={'Low: 6'}
          containerStyle={intervalWrapper}
          messageOneStyle={interval}
          messageTwoStyle={interval}
        />
      </View>
      <RowText 
        messageOne={'Its Sunny'}
        messageTwo={'Its perfect t-shit weather!'}
        containerStyle={bodyWrapper}
        messageOneStyle={description}
        messageTwoStyle={message}
       />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'lightgreen',
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  interval: {
    color: 'black',
    fontSize: 20,
  },
  intervalWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
    alignItems: 'flex-start'
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default CurrentWeather;