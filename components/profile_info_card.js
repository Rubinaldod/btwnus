import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Modal,
    TextInput,
    Button,
    } from "react-native";
import { useState } from "react";
  
  
  export default function Profile_crd_info({navigation}){
   const  [modalOpen, setModalopen] = useState(true);
      return(
        <View style={styles.container}>
  <View style={styles.card}>

    <View style={{paddingTop:35}}>
<Image  style={styles.img} source={require('../assets/image/profile.jpg')} />
  </View>

  <View style={{paddingTop:20}}>
    <Text style={styles.userName}>Anacleto Fana</Text>
  </View>
  </View>

          </View>
  
      );
  }
  
   
  
  
  const styles  = StyleSheet.create({
    container:{
        flexDirection:'column',

    },
    img:{
        width: 100,
        height: 100,
        borderRadius: 1000,
        borderWidth:3,
        borderColor:'#f113ac',
    },
    userName:{
        fontWeight:'bold',
    }
  })
  