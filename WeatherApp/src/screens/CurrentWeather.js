import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType  } from "../utilities/weatherType";

const CurrentWeather = ({weatherData}) => {
  const {
    wrapper,
    container,
    tempStyles,
    intervalWrapper,
    interval,
    feels,
    bodyWrapper,
    description,
    message,
  } = styles;

  const { main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={80} color="white" />
        <Text style={`${temp}°`}>{}</Text>
        <Text style={feels}>{`Feels Like: ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}°`}
          messageTwo={`Low: ${temp_min}°`}
          containerStyle={intervalWrapper}
          messageOneStyle={interval}
          messageTwoStyle={interval}
        />
      </View>
      <RowText
        messageOne={weatherData.weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyle={bodyWrapper}
        messageOneStyle={description}
        messageTwoStyle={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempSyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  interval: {
    color: "black",
    fontSize: 20,
  },
  intervalWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40,
    alignItems: "flex-start",
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});

export default CurrentWeather;
