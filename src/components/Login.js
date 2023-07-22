// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/Logo_1.png';

const LoginScreen = () => {
    const { height } = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const goToRegisterScreen = () => {
        navigation.navigate('Register');
    };

    const handleLogin = () => {
        // You can implement authentication logic here
        // For this example, let's simply check if username and password are not empty
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter your username and password.');
        } else {
            alert('Login successful!');
            navigation.navigate('Profile', { username }); // Pass the username as a parameter
        }
    };


    return (
        <View style={styles.container}>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <Text style={styles.butText}>Don't Have an Account?</Text>
                <TouchableOpacity onPress={goToRegisterScreen}>
                    <Text style={styles.butText2}> Sign Up</Text>
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
    },
    logo: {
        height: 100,
        width: '70%',
    },
    input: {
        width: '70%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: 'white',
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
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    butText: {
        color: '#ffff',
        fontSize: 13,
        fontWeight: 'bold',

    },
    butText2: {
        color: '#007bff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
