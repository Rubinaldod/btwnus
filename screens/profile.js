import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AnimatedHeader from '../components/AnimatedHeader';
import React, { useRef } from 'react';

export default function Profile() {
  const offset = useRef(new Animated.Value(0)).current;

  return <AnimatedHeader />;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
