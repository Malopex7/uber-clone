import { Image, StyleSheet, Platform } from 'react-native';
import { View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TailwindExample from '@/components/TailwindExample';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TailwindExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});