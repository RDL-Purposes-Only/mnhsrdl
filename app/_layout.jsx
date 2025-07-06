import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
    alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <LinearGradient
      colors={['#006400', '#32CD32']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.box}>
        <Text style={styles.textTitle}>SAMS</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.forgotText}>Forgot your password?</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },

  box: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 30,
    alignItems: 'center',

    // Shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 12,
  },

  textTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    color: 'black',
  },

  inputContainer: {
    width: '100%',
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    backgroundColor: '#f9fff9',
  },

  passwordInput: {
    marginBottom: 30,
  },

  button: {
    backgroundColor: 'black',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },

  forgotText: {
    marginTop: 20,
    color: 'black',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
