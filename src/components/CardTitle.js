import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const CardTitle = (props) => {
  return <Text style={styles.cardTitle}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
