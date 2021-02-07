import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello apps world!</Text>
      {/* <View>{dataArray.map((item, index) => (
            <Card  title={item.title}  key={index} text={item.text} />
          ))}</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
});
