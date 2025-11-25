import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import * as Vibration from 'expo-vibration';

export default function App() {
  const [isConfigured, setIsConfigured] = useState(false);
  const [deviceId, setDeviceId] = useState('');
  const [pairedDeviceId, setPairedDeviceId] = useState('');
  const [config, setConfig] = useState({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  });
  const [firebaseApp, setFirebaseApp] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Cargar configuración guardada
  useEffect(() => {
    // Generar ID único si no existe
    const uniqueId = 'device_' + Math.random().toString(36).substr(2, 9);
    setDeviceId(uniqueId);
  }, []);

  const handleConfigSubmit = () => {
    if (!config.apiKey || !config.databaseURL || !pairedDeviceId) {
      Alert.alert('Error', 'Por favor completa todos los campos requeridos');
      return;
    }

    try {
      // Inicializar Firebase
      const app = initializeApp(config);
      const database = getDatabase(app);
      setFirebaseApp(app);
      
      // Escuchar vibraciones del otro dispositivo
      const vibrationRef = ref(database, `vibrations/${pairedDeviceId}`);
      onValue(vibrationRef, (snapshot) => {
        const shouldVibrate = snapshot.val();
        if (shouldVibrate) {
          Vibration.vibrate(1000); // Vibrar por 1 segundo
          // Resetear el valor para evitar vibración continua
          set(ref(database, `vibrations/${pairedDeviceId}`), false);
        }
      });
      
      setIsConfigured(true);
      setIsConnected(true);
      Alert.alert('Éxito', 'Configuración completada correctamente');
    } catch (error) {
      Alert.alert('Error', 'Error al inicializar Firebase: ' + error.message);
    }
  };

  const triggerVibration = () => {
    if (!isConfigured || !firebaseApp) {
      Alert.alert('Error', 'Primero debes completar la configuración');
      return;
    }

    try {
      const database = getDatabase(firebaseApp);
      
      // Enviar señal de vibración al otro dispositivo
      set(ref(database, `vibrations/${pairedDeviceId}`), true);
      Alert.alert('Éxito', 'Señal de vibración enviada');
    } catch (error) {
      Alert.alert('Error', 'Error al enviar la señal: ' + error.message);
    }
  };

  if (!isConfigured) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Configuración Inicial</Text>
          
          <Text style={styles.label}>Tu ID de Dispositivo (guarda este ID):</Text>
          <TextInput
            style={styles.input}
            value={deviceId}
            editable={false}
          />
          
          <Text style={styles.label}>ID del Dispositivo Emparejado:</Text>
          <TextInput
            style={styles.input}
            value={pairedDeviceId}
            onChangeText={setPairedDeviceId}
            placeholder="Ingresa el ID del otro dispositivo"
          />
          
          <Text style={styles.label}>Firebase API Key:</Text>
          <TextInput
            style={styles.input}
            value={config.apiKey}
            onChangeText={(text) => setConfig({...config, apiKey: text})}
            placeholder="Ingresa tu API Key"
          />
          
          <Text style={styles.label}>Firebase Database URL:</Text>
          <TextInput
            style={styles.input}
            value={config.databaseURL}
            onChangeText={(text) => setConfig({...config, databaseURL: text})}
            placeholder="Ingresa tu Database URL"
          />
          
          <Text style={styles.label}>Firebase Auth Domain:</Text>
          <TextInput
            style={styles.input}
            value={config.authDomain}
            onChangeText={(text) => setConfig({...config, authDomain: text})}
            placeholder="Ingresa tu Auth Domain"
          />
          
          <Text style={styles.label}>Firebase Project ID:</Text>
          <TextInput
            style={styles.input}
            value={config.projectId}
            onChangeText={(text) => setConfig({...config, projectId: text})}
            placeholder="Ingresa tu Project ID"
          />
          
          <Text style={styles.label}>Firebase Storage Bucket:</Text>
          <TextInput
            style={styles.input}
            value={config.storageBucket}
            onChangeText={(text) => setConfig({...config, storageBucket: text})}
            placeholder="Ingresa tu Storage Bucket"
          />
          
          <Text style={styles.label}>Firebase Messaging Sender ID:</Text>
          <TextInput
            style={styles.input}
            value={config.messagingSenderId}
            onChangeText={(text) => setConfig({...config, messagingSenderId: text})}
            placeholder="Ingresa tu Messaging Sender ID"
          />
          
          <Text style={styles.label}>Firebase App ID:</Text>
          <TextInput
            style={styles.input}
            value={config.appId}
            onChangeText={(text) => setConfig({...config, appId: text})}
            placeholder="Ingresa tu App ID"
          />
          
          <TouchableOpacity style={styles.button} onPress={handleConfigSubmit}>
            <Text style={styles.buttonText}>Guardar Configuración</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>App de Vibración</Text>
        
        <Text style={styles.infoText}>Tu ID: {deviceId}</Text>
        <Text style={styles.infoText}>ID Emparejado: {pairedDeviceId}</Text>
        
        <TouchableOpacity style={styles.vibrateButton} onPress={triggerVibration}>
          <Text style={styles.vibrateButtonText}>Hacer Vibrar el Otro Dispositivo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, {marginTop: 20}]} 
          onPress={() => {
            setIsConfigured(false);
            setIsConnected(false);
            setFirebaseApp(null);
          }}
        >
          <Text style={styles.buttonText}>Cambiar Configuración</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, {marginTop: 10}]} 
          onPress={() => Vibration.vibrate(500)}
        >
          <Text style={styles.buttonText}>Probar Vibración Local</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
  },
  mainContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  vibrateButton: {
    backgroundColor: '#FF3B30',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  vibrateButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#666',
  },
});
