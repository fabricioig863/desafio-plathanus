import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalList from './HorizontalList';

const TechNews = ({ data }) => {
  return <HorizontalList title="TechNews News" data={data} />
}

const styles = StyleSheet.create({
  container: {}
})
export default TechNews;