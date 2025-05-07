import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import HotelAIService from '../../utils/mendableAI';

const VirtualConcierge = () => {
  const [query, setQuery] = useState('');
  const [conversation, setConversation] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const aiService = new HotelAIService(process.env.MENDABLE_API_KEY);

  const quickQuestions = [
    'What time is breakfast?',
    'Book a spa appointment',
    'Restaurant recommendations',
    'Local attractions',
    'Room service menu'
  ];

  useEffect(() => {
    // Initial greeting
    setConversation([{
      type: 'bot',
      message: 'Hello! I'm your AI concierge. How can I assist you today?'
    }]);
  }, []);

  const handleSend = async () => {
    if (!query.trim()) return;

    // Add user message to conversation
    setConversation(prev => [...prev, {
      type: 'user',
      message: query
    }]);

    try {
      // Get AI response
      const response = await aiService.getGuestExperienceOptimization({
        query,
        preferences: {}, // Could be populated with user preferences
        previousInteractions: conversation
      });

      // Add AI response to conversation
      setConversation(prev => [...prev, {
        type: 'bot',
        message: response.answer
      }]);

      // Update suggestions based on context
      if (response.suggestions) {
        setSuggestions(response.suggestions);
      }
    } catch (error) {
      console.error('AI Service Error:', error);
      setConversation(prev => [...prev, {
        type: 'bot',
        message: 'I apologize, but I'm having trouble processing your request. Please try again or contact the front desk.'
      }]);
    }

    setQuery('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Virtual Concierge</Text>
      
      <ScrollView style={styles.quickQuestions} horizontal showsHorizontalScrollIndicator={false}>
        {quickQuestions.map((question, index) => (
          <TouchableOpacity
            key={index}
            style={styles.quickQuestion}
            onPress={() => setQuery(question)}
          >
            <Text style={styles.quickQuestionText}>{question}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.conversation}>
        {conversation.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.message,
              msg.type === 'user' ? styles.userMessage : styles.botMessage
            ]}
          >
            <Text style={styles.messageText}>{msg.message}</Text>
          </View>
        ))}
      </ScrollView>

      {suggestions.length > 0 && (
        <View style={styles.suggestions}>
          <Text style={styles.suggestionsTitle}>Suggestions:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {suggestions.map((suggestion, index) => (
              <TouchableOpacity
                key={index}
                style={styles.suggestion}
                onPress={() => setQuery(suggestion)}
              >
                <Text style={styles.suggestionText}>{suggestion}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="Ask me anything..."
          placeholderTextColor="#95a5a6"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <MaterialIcons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
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
    marginBottom: 15,
    color: '#2c3e50',
  },
  quickQuestions: {
    flexGrow: 0,
    marginBottom: 15,
  },
  quickQuestion: {
    backgroundColor: '#f5f6fa',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  quickQuestionText: {
    color: '#2c3e50',
  },
  conversation: {
    flex: 1,
    marginBottom: 15,
  },
  message: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: '#3498db',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
  },
  botMessage: {
    backgroundColor: '#f5f6fa',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 5,
  },
  messageText: {
    color: '#2c3e50',
    fontSize: 16,
  },
  suggestions: {
    marginBottom: 15,
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#2c3e50',
  },
  suggestion: {
    backgroundColor: '#f5f6fa',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  suggestionText: {
    color: '#2c3e50',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#3498db',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VirtualConcierge;