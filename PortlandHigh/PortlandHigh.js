import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  Alert,
  Animated,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Linking,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  DevSettings
} from 'react-native';
import { WebView } from 'react-native-webview';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

const PortlandHigh = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ gestureEnabled: false, headerShown: false, }}
        />
      </Stack.Navigator>
    
  );
};

const HomeScreen = () => {
    return (
        <View style={StyleSheet.absoluteFill}>
          <WebView
            source={{ uri: 'https://phs.portlandschools.org/' }}
            style={{ flex: 1 }} // Ensure the WebView fills the available space
          />
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('MenuScreen')}
            style={styles.floatingButton}>
            <Ionicons name="menu" size={30} color="#FFF" />
          </TouchableOpacity> */}
        </View>
      );
};
//Fix the floating button logic ... are we even going to need it ??? Nobody knows


const ICScreen = ({ navigation }) => {
    return (
      <View style={StyleSheet.absoluteFill}>
        <WebView
          source={{
            uri: 'https://ic.portlandschools.org/campus/portal/students/portland.jsp',
          }}
          style={{ flex: 1 }} // Ensure the WebView fills the available space
        />
        
      </View>
    );
  };

  const OrangePassScreen = ({ navigation }) => {
    return (
      <View style={StyleSheet.absoluteFill}>
        <WebView
          userAgent="Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
          source={{
            uri: 'https://orangepasses.com/',
          }}
          style={{ flex: 1 }}
        />
      </View>
    );
  };

  const TaskScreen = ({ navigation }) => {
    return (
      <View style={StyleSheet.absoluteFill}>
        <WebView
          source={{ uri: 'https://classroom.google.com/?emr=0&pli=1' }}
          style={{ flex: 1 }} // Ensure the WebView fills the available space
        />
      </View>
    );
  };


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'IC') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'OrangePass') {
            iconName = focused
              ? 'document-text'
              : 'document-text-outline';
          } else if (route.name === 'Task') {
            iconName = focused ? 'school' : 'school-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'lightgray',
        tabBarStyle: {
          height: 100, // Increased height
          paddingBottom: 30, // Adjust padding for alignment
          backgroundColor: 'navy', // Set the background color to purple
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="IC" component={ICScreen} />
      <Tab.Screen name="OrangePass" component={OrangePassScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },
  menuTitles4: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'purple',
  },
  // Add other styles as needed
});

export default PortlandHigh; 