// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   Modal,
//   TextInput,
//   Button,
// } from "react-native";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { useState } from "react";


// export default function Cards({navigation}){
//     return(
//       <View style={styles.container}>


//           <View style={styles.card}>
//             <View style={styles.cardHead}>
//               <Image source={require('../assets/image/profile.jpg')} style={styles.crd_user_image} />
//               <View style={styles.crd_top_info}>
//                 <Text style={styles.crd_user_name}>Rubinaldo Domingos</Text>
//                 <Text style={styles.crd_time}>12hrs ago</Text>
//               </View>
//             </View>

//             <View style={styles.pst_img}>
//               <Image style={styles.image} source={require('../assets/image/profile.jpg')} />
//             </View>

//             <View style={styles.interactionbar}>
//               <View style={styles.interactionContent}>
//                 <TouchableOpacity>
//                   <FontAwesome name='thumbs-o-up' size={18} style={{ marginRight: 8 }} />
//                 </TouchableOpacity>
//                 <Text>122K</Text>
//               </View>


//               <View style={styles.interactionContent}>
//                 <TouchableOpacity onPress={() => setModalopen(true)} style={{ flexDirection: 'row' }}>
//                   <FontAwesome name='commenting-o' size={18} style={{ marginRight: 8 }} />
//                   <Text>122K</Text>
//                 </TouchableOpacity>
//               </View>

//               <View style={styles.interactionContent}>
//                 <TouchableOpacity
//                   onPress={() => setModalopen(true)}
//                   style={{ flexDirection: "row" }}
//                 >
//                   <FontAwesome
//                     name="commenting-o"
//                     size={18}
//                     style={{ marginRight: 8 }} />
//                   <Text>122K</Text>
//                 </TouchableOpacity>
//               </View>

//               <View style={styles.interactionContent}>
//                 <FontAwesome
//                   name="commenting-o"
//                   size={18}
//                   style={{ marginRight: 8 }} />
//                 <Text>122K</Text>
//               </View>


//               <View style={[styles.interactionContent, { flex: 1, flexDirection: 'row-reverse', alignContent: 'flex-end', }]}>
//                 <TouchableOpacity style={{ flexDirection: 'row', }}>
//                   <FontAwesome name='bookmark-o' size={18} style={{ marginRight: 8, }} />
//                 </TouchableOpacity>
//               </View>
//               </View>

//              <View
//               style={[
//                 styles.interactionContent,
//                 {
//                   flex: 1,
//                   flexDirection: "row-reverse",
//                   alignContent: "flex-end",
//                 },
//               ]}
//             >
//               <TouchableOpacity style={{ flexDirection: "row" }}>
//                 <FontAwesome
//                   name="bookmark-o"
//                   size={18}
//                   style={{ marginRight: 8 }} />
//               </TouchableOpacity>
//             </View>
//           </View>


//           <View style={styles.textContet}>
//             <Text style={styles.textContetText}>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley.
//             </Text>
//           </View>


//            <Modal visible={modalOpen} animationType={"slide"} style={styles.modal}>
//           <View style={styles.modalHead}>
//             <Text style={styles.modalTitle}>233 comments </Text>

//             <View style={styles.modalCloseButton}>
//               <FontAwesome
//                 name="close"
//                 style={styles.closeButton}
//                 onPress={() => setModalopen(false)} />
//             </View>
//           </View>

//           <View style={styles.comments}>
//             <View style={styles.commentsCard}>
//               <Image
//                 style={styles.commentsImg}
//                 source={require("../assets/image/profile.jpg")} />

//               <View style={styles.commentsDetails}>
//                 <Text style={styles.modalUserName}>Rubinaldo Domingos</Text>
//                 <Text style={styles.modalCommentText}>
//                   Lorem Ipsum is simply dummy text of the printing and typesetting
//                   industry.
//                 </Text>
//               </View>
//             </View>

//             <View style={styles.commentsCard}>
//               <Image
//                 style={styles.commentsImg}
//                 source={require("../assets/image/profile.jpg")} />

//               <View style={styles.commentsDetails}>
//                 <Text style={styles.modalUserName}>Rubinaldo Domingos</Text>
//                 <Text style={styles.modalCommentText}>
//                   Lorem Ipsum is simply dummy text of the printing and typesetting
//                   industry.
//                 </Text>
//               </View>
//             </View>

//             <View style={styles.commentsCard}>
//               <Image
//                 style={styles.commentsImg}
//                 source={require("../assets/image/profile.jpg")} />

//               <View style={styles.commentsDetails}>
//                 <Text style={styles.modalUserName}>Rubinaldo Domingos</Text>
//                 <Text style={styles.modalCommentText}>
//                   Lorem Ipsum is simply dummy text of the printing and typesetting
//                   industry.
//                 </Text>
//               </View>
//             </View>
//           </View>

// {/* modal */}
//           <View style={styles.modalFooter}>
//             <View style={styles.footer}>
//               <Image
//                 style={styles.commentsImg}
//                 source={require("../assets/image/profile.jpg")} />

//               <TextInput
//                 placeholder="Comment"
//                 style={styles.textInput}
//               ></TextInput>
//               <TouchableOpacity
//                 style={{
//                   backgroundColor: "black",
//                   flex: 0.3,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginLeft: 4,
//                   borderRadius: 2,
//                 }}
//               >
//                 <Text style={{ color: "white" }}>Post</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//         </View>
//     );
// }

 


// const styles  = StyleSheet.create({
//     card: {
//     height: undefined,
//   },
//   cardHead: {
//     padding: 10,
//     flexDirection: "row",
//   },
//   crd_user_image: {
//     width: 45,
//     height: 45,
//     borderRadius: 1000,
//   },
//   crd_user_name: {
//     fontWeight: "bold",
//   },
//   crd_top_info: {
//     justifyContent: "center",
//     padding: 10,
//   },
//   crd_time: {
//     fontSize: 10,
//   },
//   pst_img: {
//     width: "100%",
//     height: undefined,
//     alignContent: "center",
//     aspectRatio: 1,

// },
// interactionbar:{
//     padding:20,
//     flexDirection:'row',
//     alignItems:'center',
// },
// interactionContent:{
//     flexDirection:'row',
//     marginRight:25,

// },
// bookmark:{
    
// },
// textContet:{
//     paddingLeft:18,
//     paddingRight:18,
// },
// textContetText:{
//     textAlign:'left'
// },
// modalHead:{
//  flexDirection:'row',
//  justifyContent:'center',
//  alignContent:'center',
//  padding:10,
//  borderBottomColor:'black',
//  borderBottomWidth:0.2,

// },
// modalTitle:{
//     textAlign:'center',
//     fontWeight:'bold',
//     flex:1,

// },
// modalCloseButton:{

//     flexDirection:'row-reverse',
//     flex:1,
//     paddingRight:5,

// },
// closeButton:{
//     marginRight:20,
//     fontSize:20,
// },
// comments:{
//     padding:10,
// },
// commentsImg:{
//     marginRight:10,
//     width:35,
//     height:35,

//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     aspectRatio: 1,
//   },
//   interactionbar: {
//     padding: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   interactionContent: {
//     flexDirection: "row",
//     marginRight: 25,
//   },
//   bookmark: {},
//   textContet: {
//     paddingLeft: 18,
//     paddingRight: 18,
//   },
//   textContetText: {
//     textAlign: "left",
//   },
//   modalHead: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignContent: "center",
//     padding: 10,
//     borderBottomColor: "black",
//     borderBottomWidth: 0.2,
//   },
//   modalTitle: {
//     textAlign: "center",
//     fontWeight: "bold",
//     flex: 1,
//   },
//   modalCloseButton: {
//     flexDirection: "row-reverse",
//     flex: 1,
//     paddingRight: 5,
//   },
//   closeButton: {
//     marginRight: 20,
//     fontSize: 20,
//   },
//   comments: {
//     padding: 10,
//   },
//   commentsImg: {
//     marginRight: 10,
//     width: 35,
//     height: 35,

//     borderRadius: 1000,
//   },
//   commentsCard: {
//     flexDirection: "row",
//     padding: 10,
//   },
//   modalUserName: {
//     fontWeight: "bold",
//   },
//   modalCommentText: {
//     paddingRight: 10,
//     textAlign: "left",
//   },
//   modalFooter: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     bottom: 0,
//     padding: 20,
//   },
//   footer: {
//     flexDirection: "row",
//   },
//   textInput: {
//     borderWidth: 0.2,
//     flex: 1,
//     borderRadius: 1,
//     padding: 4,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     aspectRatio: 1,
//   },
//   interactionbar: {
//     padding: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   interactionContent: {
//     flexDirection: "row",
//     marginRight: 25,
//   },
//   bookmark: {},
//   textContet: {
//     paddingLeft: 18,
//     paddingRight: 18,
//   },
//   textContetText: {
//     textAlign: "left",
//   },
// })
