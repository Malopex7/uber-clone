import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TailwindExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tailwind CSS Example
      </Text>
      
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.blueBox]}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={[styles.box, styles.greenBox]}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={[styles.box, styles.purpleBox]}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tap Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  boxContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  box: {
    width: 96,
    height: 96,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueBox: {
    backgroundColor: '#3b82f6',
  },
  greenBox: {
    backgroundColor: '#22c55e',
  },
  purpleBox: {
    backgroundColor: '#a855f7',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});