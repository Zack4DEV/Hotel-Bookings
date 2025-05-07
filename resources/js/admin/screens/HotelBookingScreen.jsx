import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HotelHeader from '../components/Hotel/HotelHeader';
import RoomList from '../components/Hotel/RoomList';
import HotelServices from '../components/Hotel/HotelServices';
import SmartRoomControl from '../components/Hotel/SmartRoomControl';
import VirtualConcierge from '../components/Hotel/VirtualConcierge';

const HotelBookingScreen = () => {
  const [activeTab, setActiveTab] = useState('rooms');

  const renderContent = () => {
    switch (activeTab) {
      case 'rooms':
        return (
          <>
            <HotelServices />
            <RoomList />
          </>
        );
      case 'smart-room':
        return <SmartRoomControl />;
      case 'concierge':
        return <VirtualConcierge />;
      default:
        return <RoomList />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HotelHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      {renderContent()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HotelBookingScreen;