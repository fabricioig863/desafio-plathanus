import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalList from './HorizontalList';

const BreakingNews = ({ data }) => {
  return <HorizontalList title="Breaking News" data={data} />
}

const styles = StyleSheet.create({
  container: {}
})
export default BreakingNews;