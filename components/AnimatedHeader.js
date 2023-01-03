import React from 'react';
import {
  Animated,
  Pressable,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Card from './card';
import { WINDOW_HEIGHT } from './utils';

export default AnimatedHeader = () => {
  const renderItem = ({ item }) => <Card />;
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.topHeader}>
        <Text style={{ fontWeight: 'bold' }}>Edit profile</Text>
        <Text style={{ fontWeight: 'bold' }}>Saved</Text>
      </View>
      <View style={styles.header}>
        <Image
          source={require('../assets/image/profile.jpg')}
          style={styles.userImg}
        />

        <Text style={{ fontWeight: 'bold', padding: 10 }}>
          Rubinaldo Domingos
        </Text>
      </View>

      <ScrollView>
        <View style={styles.paddingforHeader}></View>
        <View style={styles.ScrollViewContent}>
          <FlatList data={Card} renderItem={renderItem} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 136,
    padding: 20,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: '#B3B6B7',
  },
  ScrollViewContent: {
    height: WINDOW_HEIGHT * 1.7,
    backgroundColo: 'black',
  },
  paddingforHeader: {
    height: 10,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  userImg: {
    width: 80,
    height: 80,
    borderRadius: 300,
  },
});
