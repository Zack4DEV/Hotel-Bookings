import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Title, Surface } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import AdminHeader from '../components/AdminHeader';
import StatsOverview from '../components/StatsOverview';
import BookingManagement from '../components/BookingManagement';
import StaffManagement from '../components/StaffManagement';
import RevenueAnalytics from '../components/RevenueAnalytics';

const AdminDashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <AdminHeader />
      <StatsOverview />
      <View style={styles.gridContainer}>
        <BookingManagement />
        <StaffManagement />
        <RevenueAnalytics />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  gridContainer: {
    padding: 16,
    gap: 16,
  },
});

export default AdminDashboard;