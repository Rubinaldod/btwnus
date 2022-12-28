import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Profile_crd_info from '../components/profile_info_card';
import MyTopTabs from '../components/profile_top_navigator';
import TopNavigatioBar from '../components/profile_top_navigator';

export default function Profile() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Profile_crd_info />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
