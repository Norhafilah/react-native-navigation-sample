import React from "react";
import { AppRegistry } from "react-native";
import Home from "./src/Home";
import { TabNavigator, StackNavigator } from "react-navigation";
import CourseDetails from "./src/CourseDetails";
import Course from "./src/Course";
import Notification from "./src/Notification";

const reactNavigationSample = props => {
  return <Home navigation={props.navigation} />;
};

reactNavigationSample.navigationOptions = {
  title: "Home"
};

const Tab = TabNavigator({
  Home: { screen: reactNavigationSample },
  Course: { screen: Course, title: "Course"},
  Notification : { screen: Notification, title: "Notification" }
});

const SimpleApp = StackNavigator({
  Home: { screen: Tab },
  CourseDetails: { screen: CourseDetails, title: "CourseDetails" }
});

AppRegistry.registerComponent("reactNavigationSample", () => SimpleApp);
