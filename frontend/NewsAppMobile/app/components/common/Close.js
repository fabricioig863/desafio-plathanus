import React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Close = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name='times-circle'
        size={25}
        color='white'
        style={styles.icon}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginVertical: 20,
  },
  icon: {
    backgroundColor: 'rgba(92, 90, 91, 0.7)',
    padding: 10,
    borderRadius: 50,
  },
});

export default Close;
