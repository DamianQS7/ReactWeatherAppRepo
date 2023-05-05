import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather';

const App = () => {
  return (
    <View styles={styles.container}>
      <UpcomingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;