import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native';
import InputComp from './components/InputComp';
import ButtonComp from './components/ButtonComp';
import LoginLinks from './components/LoginLinks';

function App() {
    return (
      <View style={styles.container}>
        <View style={styles.bar}></View>
        <View style={styles.info_container}>
          <Image style={styles.logo} source={require('./images/logo.png')} />
          <InputComp title="Email" />
          <InputComp title="Contraseña" />
          <ButtonComp text="Iniciar Sesión" />
          <LoginLinks text="¿No tienes cuenta?, Regístrate"/>
          <LoginLinks text="¿Olvidaste tu contraseña?" />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  info_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  bar: {
    backgroundColor: '#563735',
    width: '100%',
    height: 50,
  },
});

export default App