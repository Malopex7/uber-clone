import { View, Text } from 'react-native';
import TailwindExample from '@/components/TailwindExample';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <TailwindExample />
    </View>
  );
}