import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.temp}>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like: 5</Text>
        <View style={styles.intervalWrapper}>
          <Text style={styles.interval}>High: 8</Text>
          <Text style={styles.interval}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's perfect t-shit weather!</Text>
      </View>
        
      
    </SafeAreaView>
  );
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

  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default App;