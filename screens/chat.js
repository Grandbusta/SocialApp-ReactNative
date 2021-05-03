import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image, FlatList, TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik'
import ChatHeader from '../shared/chatHeader'

export default function Chat({navigation,route}) {
  const data=[
    {
      key:'1',
      text:'Yo! busta is back',
      me:true,
      time:'12:39'
    },
    {
      key:'2',
      text:'How about we do some little things before you travel?How about we do some little things before you travel?How about we do some little things before you travel?',
      me:false,
      time:'12:50'
    },
    {
      key:'3',
      text:'How about we do some little things before you travel?How about we do some little things before you travel?How about we do some little things before you travel?',
      me:false,
      time:'13:00'
    },
    {
      key:'4',
      text:'I do not know about my movement for now bro',
      me:true,
      time:'13:01'
    },
    {
      key:'5',
      text:'I do not know about my movement for now bro',
      me:false,
      time:'13:01'
    },
    {
      key:'6',
      text:'I do not know about my movement for now bro',
      me:true,
      time:'13:01'
    },
    {
      key:'7',
      text:'I do not know about my movement for now bro',
      me:true,
      time:'13:01'
    },
    {
      key:'8',
      text:'I do not know about my movement for now bro',
      me:false,
      time:'13:01'
    },
    {
      key:'9',
      text:'I do not know about my movement for now bro',
      me:false,
      time:'13:01'
    },
    {
      key:'10',
      text:'I do not know about my movement for now bro',
      me:true,
      time:'13:01'
    },
  ]
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.chatView}>
      <ChatHeader navigation={navigation} user={route.params.user}/>
      <View style={styles.msgBox}>
        <FlatList
        contentContainerStyle={{paddingBottom:250}}
          data={data}
          renderItem={({item})=>(
            <View style={item.me?styles.myMsg:styles.msg}>
              <Text style={styles.msgText}>{item.text}</Text>
              <Text style={{alignSelf:'flex-end',color:'#D3D3D3'}}>{item.time}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.chatSect}>
        <View>
          <Ionicons name="add-sharp" size={40} color="#1DA1F2" />
        </View>
        <Formik initialValues={{chat:''}}>
          {({handleChange,values})=>(
            <View style={{width:'75%'}}>
              <TextInput
              multiline
              style={styles.searchInput}
              onChangeText={handleChange('chat')}
              value={values.chat}
              placeholder='Type a message'
              />
            </View>
          )}
        </Formik>
        <View>
          <MaterialCommunityIcons name="send-circle" size={54} color="#1DA1F2" />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({
  chatView:{
    backgroundColor:'white',
    flex:1
  },
  chatSect:{
    position:'absolute',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    width:'100%',
    paddingVertical:20,
    bottom:0,
    backgroundColor:'white'
  },
  text:{
    fontSize:26
  },
  searchInput:{
    paddingHorizontal:22,
    paddingVertical:10,
    fontSize:20,
    backgroundColor:'#F5F5F5',
    borderRadius:20
  },
  myMsg:{
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    borderTopRightRadius:10,
    backgroundColor:'#1DA1F2',
    paddingHorizontal:15,
    paddingVertical:10,
    maxWidth:'70%',
    alignSelf:'flex-end',
    marginVertical:5
  },
  msg:{
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    backgroundColor:'#657786',
    paddingHorizontal:15,
    paddingVertical:10,
    maxWidth:'70%',
    alignSelf:'flex-start',
    marginVertical:5
  },
  msgText:{
    color:'white',
    fontSize:16
  },
  msgBox:{
    height:'100%',
    paddingHorizontal:10
  }
})
