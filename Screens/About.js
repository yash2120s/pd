import React from 'react';
import { Text, View ,StyleSheet,TouchableOpacity } from 'react-native';

export default class About extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
<Text style = {styles.s}> 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓸𝓾𝓻 𝓔𝓶𝓮𝓰𝓮𝓷𝓬𝔂 𝓢𝓞𝓢 𝓪𝓹𝓹 𝔀𝓱𝓲𝓬𝓱 𝓲𝓼 𝓿𝓮𝓻𝓲𝓯𝓲𝓮𝓭  𝓪𝓷𝓭 𝓟𝓪𝓻𝓽𝓷𝓮𝓻𝓮𝓭 𝔀𝓲𝓽𝓱 𝓟𝓵𝓪𝔂 𝓢𝓽𝓸𝓻𝓮  </Text>
  <View>

<Text style = {styles.t}> 𝓐𝓫𝓸𝓾𝓽 𝓟𝓻𝓸𝓰𝓻𝓪𝓶𝓮𝓻  </Text>
<Text style = {styles.a}> 𝓝𝓐𝓜𝓔: 𝓨𝓪𝓼𝓱𝓻𝓪𝓳 𝓓𝓲𝔁𝓲𝓽 
</Text>
<Text style = {styles.a}> 𝓝𝓘𝓒𝓚𝓝𝓐𝓜𝓔: 𝓨𝓪𝓼𝓱 </Text>
<Text style = {styles.a}> 𝓟𝓡𝓞𝓕𝓔𝓢𝓢𝓘𝓞𝓝: 𝓖𝓪𝓶𝓮𝓻,𝓐𝓼𝓹𝓲𝓻𝓲𝓷𝓰 𝓟𝓻𝓸𝓰𝓻𝓪𝓶𝓶𝓮𝓻 , 𝓐𝓼𝓹𝓲𝓻𝓲𝓷𝓰 𝓗𝓪𝓬𝓴𝓮𝓻  </Text>
<Text style = {styles.a}> 𝓒𝓘𝓣𝓨 : 𝓡𝓪𝓮𝓫𝓪𝓻𝓮𝓵𝓲, 𝓤𝓽𝓽𝓪𝓻𝓟𝓻𝓪𝓭𝓮𝓼𝓱 </Text>
      </View> </View>  
    )
  }
}

 const styles = StyleSheet.create({
container:{
  flex:1
  , backgroundColor:""
},
s:{
  alignContent:"center",
  alignItems:"center",
  justifyContent:"center",
  fontStyle:"bold",
  marginTop:"5%"
  , fontSize:20,color:"red"
},
t:{
  alignContent:"center",
  alignItems:"center",
  justifyContent:"center",
  fontStyle:"bold",
  marginLeft : "7%",
  fontSize:25,color:"blue"
},
a:{
  alignContent:"center",
  alignItems:"center",
  justifyContent:"center",
  fontStyle:"bold",
  marginTop:"5%"
  , fontSize:18,color:""
},
 })