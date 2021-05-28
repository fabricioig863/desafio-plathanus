import React from 'react';
import { StyleSheet } from 'react-native';
import BlockCard from './BlockCard';

const FeatureNews = ({ item }) => {
  return <BlockCard item={item} style={{ marginVertical: 15 }} />;
}

const styles = StyleSheet.create({
  container: {

  }
})

export default FeatureNews;