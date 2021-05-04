import React from 'react';
import { Text, View,ScrollView, TouchableOpacity, TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { AntDesign,FontAwesome,Feather } from '@expo/vector-icons'
import { Formik } from 'formik'
import globalStyles from '../shared/globalStyles'

export default function SignIn({navigation}) {
    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{paddingBottom:100,paddingHorizontal:'4%',alignItems:'center',backgroundColor:'white'}}>

      <View style={globalStyles.sview}>
        <Text style={globalStyles.stext}>Sign in with just one step</Text>
        <View style={globalStyles.socialview}>
          <TouchableOpacity style={globalStyles.iconbtn}>
            <FontAwesome name="facebook" size={24} color="#585858" />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.iconbtn}>
            <AntDesign name="google" size={24} color="#585858" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={globalStyles.sview}>
        <Text style={globalStyles.stext}>Sign in with Email</Text>
        
        <Formik initialValues={{email:'',password:''}}
        onSubmit={(values)=>{
          console.log(values)
        }}
        >
          {({handleChange,handleSubmit,values})=>{
            return(
              <View>
                <TextInput
                style={globalStyles.textinput}
                placeholder='Email'
                onChangeText={handleChange('email')}
                value={values.email}
                />
                <View style={{...globalStyles.passwordinput}}>
                  <TextInput
                  style={{...globalStyles.textinput}}
                  placeholder='Password'
                  onChangeText={handleChange('password')}
                  secureTextEntry
                  value={values.password}
                  />
                  <Feather name="eye" size={24} color="black" 
                  style={{position:'absolute',right:30,top:'40%'}}
                  />
                </View>
                
                <TouchableOpacity
                style={globalStyles.btn}
                onPress={()=>{navigation.navigate('PageStack')}}
                >
                  <Text style={globalStyles.btnText}>Login</Text>
                </TouchableOpacity>
              </View>
            )
            }}
        </Formik>
      </View>
        <View style={globalStyles.sign}>
          <Text style={{...globalStyles.text,fontSize:20}}>Dont have any account?</Text>
          <TouchableOpacity>
            <Text 
            style={{...globalStyles.text,color:'#1DA1F2',fontWeight:"bold",paddingLeft:4,fontSize:20}}
            onPress={()=>{navigation.navigate('Sign Up')}}
            >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
    )
}
