
import { View , Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';


export default function Search() {
  return (
   <SafeAreaView>
      <View style={styles.container}>
        <Text>This is Search screen</Text>
      </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    
    alignItems:'center',
  
  }
});