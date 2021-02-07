import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { CardTitle } from './CardTitle';

export const Card = (props) => {
  function clickCard() {
    props.onClick(props.title);
    //console.log(props.title);
  }
  return (
    <View style={styles.card}>
      <CardTitle onPress={clickCard} title={props.title} />
      <Text onPress={clickCard} style={styles.text}>
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: 'white',
    flexDirection: 'column',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: '30%',
    marginRight: 5,
    marginBottom: 5,
  },
  text: {
    color: 'white',
    marginTop: 18,
  },
});
