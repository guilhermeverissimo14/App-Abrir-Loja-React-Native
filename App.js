import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [img, setImage] = useState(require('./assets/fechado.jpg'));
  const [textoFrases, setTextoFrases] = useState('');
  const [btnAberto, setBtnAberto] = useState('Abrir loja!')
  let frases = [
    'Seja bem vindo.',
    'Bora recomeçar mais um dia.',
    'Estamos com varias promoções.',
    'Preço baixo e aqui.',
    'Venha para a melhor.',
    'falta pouco para acabar o estoque.',
    'Venha conhecer produtos inéditos.',
    'Você merece o que a de melhor.'
  ]

  function abrirLoja() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrases(frases[numeroAleatorio]);
    setImage(require('./assets/aberto.jpg'))
    setBtnAberto('Continue clicando');
  }

  function fecharLoja(){
    setImage(require('./assets/fechado.jpg'))
    setTextoFrases('Loja fechada!')
    setBtnAberto('Abrir loja!');
  }

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />
      <Text style={styles.textoFrase}> {textoFrases}</Text>

      <TouchableOpacity style={styles.botao} onPress={abrirLoja}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>{btnAberto}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={fecharLoja}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>Fechar a loja</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 300,
  },
  textoFrase: {
    fontSize: 30,
    color: '#dd7b22',
    margin: 50,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dd7b22',
  }

});
