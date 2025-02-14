import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
const { width } = Dimensions.get('window');
import MTIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';

const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [chat, setChat] = useState([
    { text: 'Hello, how can I help you?', isUser: false },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!userInput.trim()) return;
    
    const newChat = [...chat, { text: userInput, isUser: true }];
    setChat(newChat);
    setUserInput('');
    setLoading(true);

    setTimeout(() => {
      setChat([...newChat, { text: 'I am typing...', isUser: false }]);
    }, 500);

    setTimeout(() => {
      setChat([...newChat, { text: 'This is a sample response.', isUser: false }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.titleText}>Servo</Text>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.chatContainer}>
        {chat.map((item, index) => (
          <View
            key={index}
            style={[
              styles.chatItem,
              item.isUser ? styles.chatItemUser : styles.chatItemBot,
            ]}>
            {!item.isUser && (
              <View style={styles.buttonContainer}>
                <MTIcon name="robot-happy-outline" size={30} color={'black'} />
              </View>
            )}
            <Text style={styles.chatText}>{item.text}</Text>
          </View>
        ))}
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={userInput}
          onChangeText={(text) => setUserInput(text)}
          placeholderTextColor={'black'}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Icon name="send" size={25} color={'white'} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'white',
    width: width,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  titleText: {
    fontSize: 30,
    fontWeight: '500',
    color: 'black',
  },
  buttonContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
  chatContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  chatItem: {
    maxWidth: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eff3ea',
    padding: 10,
    borderRadius: 20,
  },
  chatItemBot: {
    alignSelf: 'flex-start',
  },
  chatItemUser: {
    backgroundColor: '#30db86',
    alignSelf: 'flex-end',
  },
  chatText: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  inputContainer: {
    width: width,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    borderRadius: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#3c3d37',
    padding: 10,
    borderRadius: 10,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
