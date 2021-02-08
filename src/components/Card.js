import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CardTitle } from './CardTitle';

export const Card = (props) => {
  function clickCard() {
    props.onClick(props.title);
  }
  return (
    <TouchableOpacity style={styles.card} onPress={clickCard}>
      <CardTitle title={props.title} />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: 'white',
    flexDirection: 'column',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: '45%',
    marginRight: 5,
    marginBottom: 5,
  },
  text: {
    color: 'white',
    marginTop: 18,
  },
});
