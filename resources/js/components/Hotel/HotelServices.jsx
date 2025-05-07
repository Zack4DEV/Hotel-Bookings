import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HotelServices = () => {
  const services = [
    {
      id: 1,
      name: 'Smart Room Control',
      icon: 'home',
      description: 'AI-powered room automation',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af'
    },
    {
      id: 2,
      name: 'Virtual Concierge',
      icon: 'support-agent',
      description: '24/7 AI assistance',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      id: 3,
      name: 'Dining Experience',
      icon: 'restaurant',
      description: 'Personalized dining recommendations',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
    },
    {
      id: 4,
      name: 'Wellness Center',
      icon: 'spa',
      description: 'AI-optimized wellness programs',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874'
    },
    {
      id: 5,
      name: 'Event Planning',
      icon: 'event',
      description: 'Smart event coordination',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enhanced Services</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceCard}>
            <Image
              source={{ uri: service.image }}
              style={styles.serviceImage}
            />
            <View style={styles.serviceInfo}>
              <MaterialIcons name={service.icon} size={24} color="#2c3e50" />
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
  },
  serviceCard: {
    width: 250,
    marginRight: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  serviceInfo: {
    padding: 15,
    alignItems: 'center',
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
    color: '#2c3e50',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default HotelServices;