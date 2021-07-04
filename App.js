import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TextInput, LogBox, Button} from 'react-native';
import firebase from './src/firebaseConnection';

LogBox.ignoreAllLogs=true;

export default function App(){
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((value) => {
        alert('Usuário criado: ' + value.user.email);
      })
      .catch((error) => {
        if(error.code === 'auth/weak-password'){
          alert('Sua senha deve ter pelo menos 6 caracteres');
          return;
        }
        if(error.code === 'auth/invalid-email'){
          alert('Email invalido');
          return;
        }else{
          alert('Ops algo deu errado.')
          return;
        }
      })
      setEmail('');
      setPassword('');
  }

  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto)=>setEmail(texto)}
        value={email}
      />

      <Text style={styles.texto}>Password</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto)=>setPassword(texto)}
        value={password}
      />

      <Button
        title="Cadastrar"
        onPress={cadastrar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:10,
  },
  texto:{
    fontSize:20,
  },
  input:{
    marginBottom:10,
    padding: 10,
    borderWidth:1,
    borderColor:'#121212',
    height: 40,
    fontSize:17
  }
});

