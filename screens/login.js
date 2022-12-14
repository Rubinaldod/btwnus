import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';


export default function Login() {

const [fontsLoaded] = useFonts({
  'sofia': require('../assets/fonts/Sofia-Regular.ttf'),
  'inter': require('../assets/fonts/Inter-Medium.ttf')
});

  return (
    
    

    <View style={styles.container}>
    <ImageBackground source={require('../assets/image/bg.png')} resizeMode='cover' style={styles.bg}>

    <View style={styles.master}>
   <View style={styles.content}>
    <Text style={styles.slogan}>
    Let's be connected to each other and let it stay between us.
    </Text>
 
    <Text  style={{ fontFamily: 'sofia',fontSize:60,color:'white',textAlign:'center'}}>
      btwnus
    </Text>

   <View style={styles.btn_view}>
   <TouchableOpacity style={styles.btn}>
   <FontAwesome name='google' size={30} color="white" style={styles.googleLogo} />
    <Text style={styles.btn_text}> Login using your AU account</Text>
    
   </TouchableOpacity>
   </View> 
   
   </View>
   </View>
   </ImageBackground>
    </View>

    
   
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    margin:0,
    padding:0,
   
  },
  master:{
    flex:1,
    padding:20,
    flexDirection:'row',
    alignItems:'flex-end',
    marginLeft:10,
  },
  
  slogan:{
    justifyContent:'center',
    alignItems:'center',
    fontSize:20,
    textAlign:'center',
    marginBottom:20,
    color:'white',
   
 
   },
   logo:{
    textAlign:'center',
    fontSize:26,
    color:'white',
    
    
  },
  btn_text:{
    textAlign:'center',
    color:'white'
  },
  btn_view:{
  marginBottom:90,  
    flexDirection:'row'
  },
  btn:{
    flex:1,
  backgroundColor:'#4285F4',
  width:200,
  height:60,
  justifyContent:'center',
  flexDirection:'row',
  alignItems: 'center',
  borderRadius:300,
  marginTop:30,
  },


bg:{
  flex:1,
  justifyContent:'center'
  },

  googleLogo:{
    marginRight: 25,
  }

});
