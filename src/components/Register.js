// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordrepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();


  const handleRegister = () => {
    // You can implement registration logic here
    // For this example, let's simply check if all fields are filled
    if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
      alert('Please fill all the fields.');
    } else {
      alert('Registration successful!');
      navigation.navigate('Login');
    }
  };

  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        secureTextEntry
        value={passwordrepeat}
        onChangeText={setPasswordRepeat}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.regText}>Already Have an Account?</Text>
        <TouchableOpacity onPress={goToLoginScreen}>
          <Text style={styles.regText2}> Log In</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#154c79',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  RegButton: {
    width: '20%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:
      'center',
    marginBottom: 10,
    right: 10,
  },
  RegButtonText: {
    color: 'gray',
    fontSize: 11,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  regText: {
    color: '#ffff',
    fontSize: 13,
    fontWeight: 'bold',

  },
  regText2: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
