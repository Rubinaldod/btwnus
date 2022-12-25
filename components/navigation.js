import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/login";
import Profile from "../screens/profile";
import Search from "../screens/search";
import Post from "../screens/post";
import Notification from "../screens/notification";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Tabs({ focused }) {
  var color = focused ? "#f113ac" : "#bbbfd0";

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showIcon: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: `#f113ac`,
        tabBarInactiveTintColor: "#bbbfd0",
        tabBarStyle: {
          height: 85,
          backgroundColor: `#f1f6fb`,
          paddingHorizontal: 25,
          alignItems: "center",
        },
      }}
      initialRouteName="Login"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome
                  name="home"
                  size={25}
                  color={focused ? "#f113ac" : "#bbbfd0"}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome
                  name="search"
                  size={22}
                  color={focused ? "#f113ac" : "#bbbfd0"}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: () => {
            <FontAwesome name="plus" />;
          },
          tabBarButton: (props) => {
            return (
              <View
                style={{
                  top: -40,
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255,255,255,0.6)",
                }}
              >
                {/* <LinearGradient
                  colors={["#f80847", "#d02dbb", "#7d6de1"]}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 35,
                  }}
                > */}
                <TouchableOpacity
                  {...props}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    borderRadius: 35,
                    width: 70,
                    height: 70,
                  }}
                >
                  <AntDesign name="plus" size={30} color={"white"}></AntDesign>
                </TouchableOpacity>
                {/* </LinearGradient> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome
                  name="bell"
                  size={22}
                  color={focused ? "#f113ac" : "#bbbfd0"}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.card_border,
                  { borderColor: focused ? "#f113ac" : "#bbbfd0" },
                ]}
              >
                <Image
                  source={require("../assets/image/profile.jpg")}
                  style={styles.crd_user_image}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navigator: {
    height: 90,
    backgroundColor: `#f1f6fb`,
  },
  card_border: {
    borderRadius: 1000,
    borderWidth: 2,
  },
  crd_user_image: {
    width: 21,
    height: 21,
    borderRadius: 1000,
    margin: 2,
  },
});
