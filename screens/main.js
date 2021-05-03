import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={require('../assets/Images/illustration.png')}
      />
      <Text style={styles.title}>Connect with passion!</Text>
      <Text style={{...styles.text,marginTop:10,fontSize:24}}>
        Welcome to the largest social platform. Follow your passion and connect with your hobby. 
      </Text>
      <TouchableOpacity
      style={styles.btn}
      onPress={()=>{navigation.navigate('Sign Up')}}>
        <Text style={styles.btnText}>Create an account</Text>
      </TouchableOpacity>
      <View style={styles.sign}>
        <Text style={{...styles.text,fontSize:20}}>Already have an account?</Text>
        <TouchableOpacity>
          <Text 
          style={{...styles.text,color:'#1DA1F2',fontWeight:"bold",paddingLeft:4,fontSize:20}}
          onPress={()=>{navigation.navigate('Sign In')}}
          >Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    backgroundColor:'white',
    alignItems:'center',
    backgroundColor:'white'
  },
  illustration: {
    width:'100%',
    resizeMode:'contain'
  },
  title:{
    fontSize:35,
    alignSelf:'center',
    fontWeight:'bold'
  },
  text: {
    color:'grey',
    alignSelf:'center',
    textAlign:'center',
  },
  btnText: {
    backgroundColor:'#1DA1F2',
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    paddingVertical:30,
    paddingHorizontal:30,
    textAlign:'center',
    borderRadius:20
  },
  btn: {
    width:'100%',
    marginVertical:20
  },
  sign: {
    flexDirection:'row',
    alignItems:'center'
  }
})
