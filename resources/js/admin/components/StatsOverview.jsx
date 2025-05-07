import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const StatsOverview = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <MaterialIcons name="hotel" size={24} color="#1976D2" />
          <Title>Total Bookings</Title>
          <Paragraph>156</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <MaterialIcons name="people" size={24} color="#388E3C" />
          <Title>Active Guests</Title>
          <Paragraph>42</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <MaterialIcons name="attach-money" size={24} color="#FBC02D" />
          <Title>Revenue</Title>
          <Paragraph>$25,430</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <MaterialIcons name="room-service" size={24} color="#E64A19" />
          <Title>Room Service</Title>
          <Paragraph>12 Active</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
  },
  card: {
    flex: 1,
    minWidth: 150,
    elevation: 2,
  },
});

export default StatsOverview;