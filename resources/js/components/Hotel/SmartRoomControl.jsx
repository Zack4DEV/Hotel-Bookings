import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SmartRoomControl = () => {
  const [temperature, setTemperature] = useState(22);
  const [lighting, setLighting] = useState(70);
  const [curtains, setCurtains] = useState('closed');
  const [mode, setMode] = useState('comfort');

  const smartModes = {
    comfort: {
      temperature: 22,
      lighting: 70,
      curtains: 'auto',
    },
    sleep: {
      temperature: 20,
      lighting: 10,
      curtains: 'closed',
    },
    work: {
      temperature: 23,
      lighting: 100,
      curtains: 'open',
    },
    eco: {
      temperature: 24,
      lighting: 50,
      curtains: 'auto',
    },
  };

  const applyMode = (selectedMode) => {
    setMode(selectedMode);
    const settings = smartModes[selectedMode];
    setTemperature(settings.temperature);
    setLighting(settings.lighting);
    setCurtains(settings.curtains);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Smart Room Control</Text>
      
      <View style={styles.modeContainer}>
        <Text style={styles.sectionTitle}>Smart Modes</Text>
        <View style={styles.modesGrid}>
          {Object.keys(smartModes).map((smartMode) => (
            <TouchableOpacity
              key={smartMode}
              style={[
                styles.modeButton,
                mode === smartMode && styles.activeModeButton,
              ]}
              onPress={() => applyMode(smartMode)}
            >
              <MaterialIcons
                name={
                  smartMode === 'comfort' ? 'weekend' :
                  smartMode === 'sleep' ? 'bedtime' :
                  smartMode === 'work' ? 'laptop' : 'eco'
                }
                size={24}
                color={mode === smartMode ? '#fff' : '#2c3e50'}
              />
              <Text style={[
                styles.modeText,
                mode === smartMode && styles.activeModeText
              ]}>
                {smartMode.charAt(0).toUpperCase() + smartMode.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.controlSection}>
        <Text style={styles.sectionTitle}>Temperature</Text>
        <View style={styles.controlRow}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => setTemperature(Math.max(16, temperature - 1))}
          >
            <MaterialIcons name="remove" size={24} color="#2c3e50" />
          </TouchableOpacity>
          <Text style={styles.valueText}>{temperature}°C</Text>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => setTemperature(Math.min(28, temperature + 1))}
          >
            <MaterialIcons name="add" size={24} color="#2c3e50" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.controlSection}>
        <Text style={styles.sectionTitle}>Lighting</Text>
        <View style={styles.controlRow}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => setLighting(Math.max(0, lighting - 10))}
          >
            <MaterialIcons name="remove" size={24} color="#2c3e50" />
          </TouchableOpacity>
          <Text style={styles.valueText}>{lighting}%</Text>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => setLighting(Math.min(100, lighting + 10))}
          >
            <MaterialIcons name="add" size={24} color="#2c3e50" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.controlSection}>
        <Text style={styles.sectionTitle}>Curtains</Text>
        <View style={styles.curtainButtons}>
          {['open', 'closed', 'auto'].map((state) => (
            <TouchableOpacity
              key={state}
              style={[
                styles.curtainButton,
                curtains === state && styles.activeCurtainButton,
              ]}
              onPress={() => setCurtains(state)}
            >
              <Text style={[
                styles.curtainButtonText,
                curtains === state && styles.activeCurtainButtonText
              ]}>
                {state.charAt(0).toUpperCase() + state.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  modeContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2c3e50',
  },
  modesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  modeButton: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
    marginBottom: 10,
  },
  activeModeButton: {
    backgroundColor: '#2c3e50',
  },
  modeText: {
    marginTop: 5,
    color: '#2c3e50',
    fontWeight: '500',
  },
  activeModeText: {
    color: '#fff',
  },
  controlSection: {
    marginBottom: 20,
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f6fa',
    borderRadius: 10,
    padding: 10,
  },
  controlButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  valueText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
  },
  curtainButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  curtainButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f5f6fa',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  activeCurtainButton: {
    backgroundColor: '#2c3e50',
  },
  curtainButtonText: {
    color: '#2c3e50',
    fontWeight: '500',
  },
  activeCurtainButtonText: {
    color: '#fff',
  },
});

export default SmartRoomControl;