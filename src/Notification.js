import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
       List of notification
      </Text>
    </View>
  );
};

Notification.navigationOptions = {
  title: "Notification"
};

export default Notification;