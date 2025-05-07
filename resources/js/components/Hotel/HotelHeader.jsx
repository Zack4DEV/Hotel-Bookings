import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HotelHeader = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'rooms', name: 'Rooms & Suites', icon: 'hotel' },
    { id: 'smart-room', name: 'Smart Room', icon: 'home' },
    { id: 'concierge', name: 'AI Concierge', icon: 'support-agent' },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb' }}
        style={styles.hero}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Luxury Stay</Text>
          <Text style={styles.subtitle}>AI-Powered Comfort</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              activeTab === tab.id && styles.activeTab
            ]}
            onPress={() => onTabChange(tab.id)}
          >
            <MaterialIcons
              name={tab.icon}
              size={24}
              color={activeTab === tab.id ? '#fff' : '#2c3e50'}
            />
            <Text style={[
              styles.tabText,
              activeTab === tab.id && styles.activeTabText
            ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  hero: {
    height: 300,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  bookButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#f5f6fa',
  },
  activeTab: {
    backgroundColor: '#2c3e50',
  },
  tabText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
});

export default HotelHeader;