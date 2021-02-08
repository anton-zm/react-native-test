import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from './src/components/Card';
import { dataArray } from './src/dataArray';

export default function App() {
  const [pageTitle, setPageTitle] = React.useState('Hello apps world!');

  function changeTitle(text) {
    setPageTitle(text);
    storeData(text);
  }

  async function storeData(value) {
    try {
      await AsyncStorage.setItem('titles', value);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pageTitle}</Text>
      <View style={styles.cardsContainer}>
        {dataArray.map((item, index) => (
          <Card onClick={changeTitle} title={item.title} text={item.text} key={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
  cardsContainer: {
    flexWrap: 'wrap',
    marginTop: 32,
  },
});
