import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HotelBookingScreen from './HotelBookingScreen';
import UserProfile from '../components/UserProfile';
import MyBookings from '../components/MyBookings';
import HotelServices from '../components/Hotel/HotelServices';

const Tab = createBottomTabNavigator();

const UserPortal = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Book':
              iconName = 'hotel';
              break;
            case 'My Bookings':
              iconName = 'book-online';
              break;
            case 'Services':
              iconName = 'room-service';
              break;
            case 'Profile':
              iconName = 'person';
              break;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Book" component={HotelBookingScreen} />
      <Tab.Screen name="My Bookings" component={MyBookings} />
      <Tab.Screen name="Services" component={HotelServices} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default UserPortal;