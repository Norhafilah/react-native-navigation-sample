import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { StackNavigator } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  coursetitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const Course = props => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Text style={styles.coursetitle}>
       Tekonlogi Maklumat
      </Text>
      <Button
        onPress={() => navigate("CourseDetails")}
        title="Course Details"
      />
    </View>
  );
};
Course.navigationOptions = {
  title: "Course"
};

export default Course;
