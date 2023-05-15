import React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
} from "react-native";
import moment from "moment";
import IconText from "../components/IconText";

const City = ({weatherData}) => {
  const {
    container,
    imageLayout,
    countryName,
    cityName,
    cityText,
    populationText,
    populationWrapper,
    riseSetText,
    riseSetWrapper,
    rowLayout,
  } = styles;

  const {name, country, population, sunrise, sunset} = weatherData;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/toronto-city.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            bodyText={`Population: ${population}`}
            iconColor={"red"}
            bodyTextStyle={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            iconColor={"white"}
            bodyTextStyle={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            bodyText={moment(sunset).format('h:mm:ss a')}
            iconColor={"white"}
            bodyTextStyle={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

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
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
