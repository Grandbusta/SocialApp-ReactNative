import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet,ScrollView,StatusBar, Text, View, TouchableOpacity, Image} from 'react-native';
import { ScaledSheet,scale } from 'react-native-size-matters'

export default function Main({ navigation }) {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor='white'/>
      <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.illustration}
        source={require('../assets/Images/illustration.png')}
      />
      <Text style={styles.title}>Connect with passion!</Text>
      <Text style={{...styles.text,marginTop:'1%',fontSize:scale(18)}}>
        Welcome to the largest social platform. Follow your passion and connect with your hobby. 
      </Text>
      <TouchableOpacity
      style={styles.btn}
      onPress={()=>{navigation.navigate('Sign Up')}}>
        <Text style={styles.btnText}>Create an account</Text>
      </TouchableOpacity>
      <View style={styles.sign}>
        <Text style={{...styles.text,fontSize:scale(16)}}>Already have an account?</Text>
        <TouchableOpacity>
          <Text 
          style={{...styles.text,color:'#1DA1F2',fontWeight:"bold",paddingLeft:4,fontSize:20}}
          onPress={()=>{navigation.navigate('Sign In')}}
          >Sign in</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
  </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex:1,
    padding:'5%',
    alignItems:'center',
    backgroundColor:'white',
    justifyContent:'center'
  },
  illustration: {
    width:'100%',
    resizeMode:'contain',
    height:'40%',
    marginBottom:'2%'
  },
  title:{
    color:'black',
    fontSize:'26@ms',
    alignSelf:'center',
    fontWeight:'bold',
    textAlign:'center'
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
    fontSize:'22@ms',
    paddingVertical:'6%',
    textAlign:'center',
    borderRadius:20
  },
  btn: {
    width:'100%',
    marginVertical:'3%'
  },
  sign: {
    flexDirection:'row',
    textAlign:'center',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'center'
  }
})
