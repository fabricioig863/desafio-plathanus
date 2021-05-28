import React from 'react';

import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import FeatureNews from './app/components/FeaturedNews';


export default function App() {
  return (
    <Screen>
      <SearchBar />
      <FeatureNews />
    </Screen>
  )
}
