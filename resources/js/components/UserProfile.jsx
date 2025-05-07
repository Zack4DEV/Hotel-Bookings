import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, Title, Paragraph, Button, List } from 'react-native-paper';

const UserProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={80}
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde' }}
        />
        <Title style={styles.name}>John Doe</Title>
        <Paragraph>Gold Member</Paragraph>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Membership Benefits</Title>
          <List.Item
            title="Priority Check-in"
            left={props => <List.Icon {...props} icon="check-circle" />}
          />
          <List.Item
            title="Late Checkout"
            left={props => <List.Icon {...props} icon="check-circle" />}
          />
          <List.Item
            title="Room Upgrades"
            left={props => <List.Icon {...props} icon="check-circle" />}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Preferences</Title>
          <List.Item
            title="Room Type"
            description="Suite"
            left={props => <List.Icon {...props} icon="hotel" />}
          />
          <List.Item
            title="Dietary"
            description="Vegetarian"
            left={props => <List.Icon {...props} icon="food" />}
          />
          <List.Item
            title="Newsletter"
            description="Subscribed"
            left={props => <List.Icon {...props} icon="email" />}
          />
        </Card.Content>
      </Card>

      <Button mode="contained" style={styles.button}>
        Edit Profile
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    marginTop: 10,
  },
  card: {
    margin: 16,
  },
  button: {
    margin: 16,
  },
});

export default UserProfile;