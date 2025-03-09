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
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="bottomNavigator"
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
          <TouchableOpacity
            onPress={() => navigation.navigate('MenuScreen')}
            style={styles.floatingButton}>
            <Ionicons name="menu" size={30} color="#FFF" />
          </TouchableOpacity>
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
          backgroundColor: 'purple', // Set the background color to purple
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