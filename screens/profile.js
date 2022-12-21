
<<<<<<< HEAD
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View ,Text} from 'react-native';
=======
import { View , Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
>>>>>>> 91187be (Created nav bar)


export default function Profile() {
  return (
<<<<<<< HEAD
   <View style={{justifyContent:'center', alignContent:'center',alignItems:'center', flexDirection:'column'}}>
    
    <Text style={{justifyContent:'center', textAlign:'center',}}>This is the profile</Text>
     </View>
=======
   <SafeAreaView>
      <View style={styles.container}>
        <Text>This is Profile screen</Text>
      </View>
   </SafeAreaView>
>>>>>>> 91187be (Created nav bar)
  );
}

const styles = StyleSheet.create({
  container:{
    
    alignItems:'center',
  
  }
});
