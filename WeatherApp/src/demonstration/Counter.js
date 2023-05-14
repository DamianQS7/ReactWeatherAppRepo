import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [ count, setCount ] = useState(0);
  const [ newCount, setNewCount ] = useState(0);

useEffect(() => {
    console.log("useEffect called");
}, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count: ${count}`}</Text>
      <Button
        color={"red"}
        title={"Increase the count"}
        onPress={() => {
          setCount(count + 1)
        }}
      ></Button>
      <Button
        color={"green"}
        title={"Decrease the count"}
        onPress={() => {
          setCount(count - 1)
        }}
      ></Button>
      <Button
        color={"red"}
        title={"Increase the count"}
        onPress={() => {
          setNewCount(count + 1)
        }}
      ></Button>
      <Button
        color={"green"}
        title={"Decrease the count"}
        onPress={() => {
          setNewCount(count - 1)
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    title: {
        fontSize: 48,
        color: 'white',
    },
});

export default Counter;
