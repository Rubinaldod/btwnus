
import { View , Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';


export default function Post() {
  return (
   <SafeAreaView>
      <View style={styles.container}>
        <Text>This is Post screen</Text>
      </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    
    alignItems:'center',
  
  }
});