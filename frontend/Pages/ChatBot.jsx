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
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
const { width } = Dimensions.get('window');
import MTIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';

const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();

  const handleSend = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setChat(prevChat => [...prevChat, { text: userInput, isUser: true }]);
    setUserInput('');
    const response = await axios.post("https://code-a-haunt-production-0c59.up.railway.app/chatbot/stream", { message: userInput })
      if(response.data){
        console.log(response.data)
        setChat(prevChat => [...prevChat, { text: response.data, isUser: false }]);
        setLoading(false);
      }else{
        setChat(prevChat => [...prevChat, { text: response.data, isUser: false }]);
        setLoading(false);
      }
        
      
      
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [chat]);

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.titleText}>Servo</Text>
      </View>
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.chatContainer} 
        ref={scrollViewRef}
      >
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
