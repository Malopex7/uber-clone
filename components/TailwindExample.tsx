import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function TailwindExample() {
  return (
    <View className="p-4 flex-1 items-center justify-center bg-white dark:bg-gray-800">
      <Text className="text-xl font-bold text-black dark:text-white mb-4">
        Tailwind CSS Example
      </Text>
      
      <View className="flex-row space-x-2 mb-4">
        <View className="w-24 h-24 bg-blue-500 rounded-lg items-center justify-center">
          <Text className="text-white font-bold">Box 1</Text>
        </View>
        <View className="w-24 h-24 bg-green-500 rounded-lg items-center justify-center">
          <Text className="text-white font-bold">Box 2</Text>
        </View>
        <View className="w-24 h-24 bg-purple-500 rounded-lg items-center justify-center">
          <Text className="text-white font-bold">Box 3</Text>
        </View>
      </View>
      
      <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-lg active:bg-blue-700">
        <Text className="text-white font-semibold">Tap Me</Text>
      </TouchableOpacity>
    </View>
  );
}