import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ProfileImage from '../../assets/images/profile_pic.png';

const ProfileScreen = () => {
  const route = useRoute();
  const { username } = route.params;

  const [aboutMe, setAboutMe] = useState(''); // State to store the user's "About Me" text

  const handleSaveDraft = () => {
    // Logic to save the "About Me" text as a draft (You can implement this based on your requirements)
    alert('About Me text saved as draft.');
  };

  const handleSubmit = () => {
    // Logic to submit the "About Me" text (You can implement this based on your requirements)
    alert('About Me text submitted.');
  };

  return (
    <View style={styles.container}>
      <Image
        source={ProfileImage} // Use single curly braces here
        style={styles.profileImage}
        resizeMode="cover"
      />
      
      <Text style={styles.welcomeText}>Welcome, {username}!</Text>
      {/* Other profile information can be displayed here */}
    
      <View style={styles.aboutMeContainer}>
        <Text style={styles.aboutMeLabel}>About Me:</Text>
        <TextInput
          style={styles.aboutMeInput}
          multiline
          placeholder="Write something about yourself..."
          value={aboutMe}
          onChangeText={setAboutMe}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSaveDraft}>
        <Text style={styles.buttonText}>Save as Draft</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#6fd2ff',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutMeContainer: {
    width: '100%',
    marginBottom: 20,
  },
  aboutMeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  aboutMeInput: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ffff',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#ffff',
  },
  button: {
    width: '70%',
    height: 40,
    backgroundColor: '#154c79',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
