import React from "react";
import { AppRegistry } from "react-native";
import Home from "./src/Home";
import { TabNavigator, StackNavigator } from "react-navigation";
import CourseDetails from "./src/CourseDetails";
import Course from "./src/Course";
import Notification from "./src/Notification";
import Menu from "./src/Menu";

const reactNavigationSample = props => {
  return <Home navigation={props.navigation} />;
};

reactNavigationSample.navigationOptions = {
  title: "Home"
};

const myDrawer = DrawerNavigator({
	Home: { screen: reactNavigationSample },	
  Notification : { screen: Notification, title: "Notification" }
},
{
	contentComponent: props => <Menu {...props} />
});

const SimpleApp = StackNavigator({
  Home: { screen: myDrawer },
  CourseDetails: { screen: CourseDetails, title: "CourseDetails" }
	
 });

AppRegistry.registerComponent("reactNavigationSample", () => SimpleApp);
