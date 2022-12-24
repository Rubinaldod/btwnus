import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Card from "../components/card";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { NavigationContainer } from "@react-navigation/native";

import Profile from "./profile";



export default function Home() {
  const renderItem = ({ item }) => <Card />;
  return (
   <SafeAreaView>
     <View style={styles.topBar}>
        <Image
          source={require("../assets/image/logo.png")}
          style={styles.logo}
        />
      </View>
    <View>

    <FlatList
         data={Card}
         renderItem={renderItem}
         style={{height:undefined,marginBottom:90}}
       /> 
       
    
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    padding: 0,
    margin: 0,
    flexDirection: "column",
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  topBar: {
    height: 45,
    marginTop: 0,
    alignContent: "center",
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    borderColor: "#000",
  },
});


// export default function Home({ navigation }) {
//   const renderItem = ({ item }) => <Card />;
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.topBar}>
//         <Image
//           source={require("../assets/image/logo.png")}
//           style={styles.logo}
//         />
//       </View>


//     <View style={styles.container}>
//    <View style={styles.topBar}>
//     <Image source={require('../assets/image/logo.png')} style={styles.logo}/>

//    </View>


// {/*  temporary  profile btn  */}
//    <View >
//    <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
   
//     <Text style={styles.btn_text}> Profile</Text>
    
//    </TouchableOpacity>
//    </View>

//    <View>
//    <FlatList
//         data={Card}
//         renderItem={renderItem}
//         style={{height:undefined,marginBottom:90}}
//       />
    
//    </View>
//     </View>

    
   
  

//       {/*  temporary  profile btn  */}
//       {/* <View>
//         <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//           <Text style={styles.btn_text}> Profile</Text>
//         </TouchableOpacity>
//       </View> */}


//       <View>
//         <FlatList
//           data={Card}
//           renderItem={renderItem}

//           style={{ height: undefined }}
//         />
//       </View>
//     {/* </SafeAreaView >

//       </View>
//       <View>
//         <FlatList
//           data={Card}
//           renderItem={renderItem}
//           style={{ height: undefined }}

//         />
//       </View>
//     </SafeAreaView> */}

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignContent: "center",
//     padding: 0,
//     margin: 0,
//     flexDirection: "column",
//     backgroundColor: "#fff",
//     marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
//   topBar: {
//     height: 45,
//     marginTop: 0,
//     alignContent: "center",
//     justifyContent: "center",
//   },
//   logo: {
//     alignSelf: "center",
//     borderColor: "#000",
//   },
// });
