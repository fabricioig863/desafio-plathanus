import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Title from './Title';
import Subtitle from './Subtitle';

const BlockCard = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={require('../../assets/Layout-gobarber.png')} style={styles.image} />
      <View style={styles.contentContainer}>
        <Title>Titulo</Title>
        <Subtitle>Descrição do subtitulo</Subtitle>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFF'
  },
  image: {
    width: '100%',
    height: 200
  },
  contentContainer: {
    padding: 5
  }
})

export default BlockCard;