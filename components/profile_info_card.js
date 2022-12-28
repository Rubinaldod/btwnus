import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Card from '../components/card';

export default function Profile_crd_info({ navigation }) {
  const [modalOpen, setModalopen] = useState(true);

  const renderItem = ({ item }) => <Card />;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.savedButton}>
            <FontAwesome style={styles.bookmark} name="bookmark-o" size={26} />
          </View>

          <View style={styles.imgcard}>
            <Image
              style={styles.img}
              source={require('../assets/image/profile.jpg')}
            />

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                paddingLeft: 15,
              }}
            >
              <Text style={styles.userName}>Rubinaldo Domingos</Text>

              <Pressable
                style={styles.editProfile}
                onPress={() => console.log('Editing')}
              >
                <Text>Edit profile</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.posts}>
          <FlatList
            data={Card}
            renderItem={renderItem}
            style={{ height: undefined, marginBottom: 90 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  savedButton: {
    height: 40,
    flexDirection: 'row-reverse',
    alignContent: 'flex-end',
    marginTop: 20,
  },
  container: {
    flexDirection: 'column',
    marginTop: 0,
    width: '100%',
    height: undefined,
    justifyContent: 'center',
    alignContent: 'center',
  },
  bookmark: {
    paddingRight: 25,
    paddingTop: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    // borderWidth:2,
    // borderColor:'#f113ac',
    alignSelf: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 40,
    alignSelf: 'flex-start',
    paddingTop: 15,
  },
  imgcard: {
    flexDirection: 'row',
    padding: 20,
  },

  editProfile: {
    height: 40,
    width: '75%',
    backgroundColor: '#D9D9D9',
    alignSelf: 'flex-start',
    marginTop: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  posts: {
    marginTop: 20,
    height: 499,
  },
});
