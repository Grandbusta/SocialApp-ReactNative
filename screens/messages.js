import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, TextInput,Image,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { AntDesign,FontAwesome,Feather } from '@expo/vector-icons'
import { Formik } from 'formik'
const img=require('../assets/Images/grandpost.jpeg')
const img2 = require('../assets/Images/profileimg.jpg')
const img3 = require('../assets/Images/img.jpg')
const img4 = require('../assets/Images/afri.jpg')
const img5 = require('../assets/Images/sit.jpg')
const img6 = require('../assets/Images/gele.jpg')
const img7 = require('../assets/Images/jide.jpg')
const img8 = require('../assets/Images/busta.jpeg')

export default function Messages({navigation}) {
const data=[
    {
      key:'1',
      username:'Grandbusta',
      time:'12:25',
      text:'All is for the best surely and correct',
      imgUrl:img,
      newMsg:1
    },
    {
      key:'2',
      username:'Olamide Badoo',
      time:'13:34',
      text:'All is for the best surely and correct',
      imgUrl:img2,
      newMsg:120
    },
    {
      key:'3',
      username:'Boluwatife John',
      time:'3:36',
      text:'All is for the best surely and correct',
      imgUrl:img3,
      newMsg:90
    },
    {
      key:'4',
      username:'Kakashi sensei',
      time:'2:10',
      text:'All is for the best surely and correct',
      imgUrl:img4,
      newMsg:32
    },
    {
      key:'5',
      username:'Uzumaki Naruto',
      time:'2:09',
      text:'All is for the best surely and correct',
      imgUrl:img5,
      newMsg:900
    },
    {
      key:'6',
      username:'Hokage sama',
      time:'2:05',
      text:'All is for the best surely and correct',
      imgUrl:img6,
      newMsg:6
    },
    {
      key:'7',
      username:'Tsunade sama',
      time:'1:00',
      text:'All is for the best surely and correct',
      imgUrl:img7,
      newMsg:89
    },
    {
      key:'8',
      username:'Ero senin',
      time:'0:00',
      text:'All is for the best surely and correct',
      imgUrl:img8,
      newMsg:16
    },
    {
      key:'9',
      username:'Wizkid',
      time:'11:59',
      text:'All is for the best surely and correct',
      imgUrl:img,
      newMsg:760
    },
    {
      key:'10',
      username:'Elijah Mikelson',
      time:'11:34',
      text:'I live by my honour everytime',
      imgUrl:img3,
      newMsg:8
    },
    {
      key:'11',
      username:'Jack Dorsey',
      time:'Yesterday',
      text:'All is for the best surely and correct',
      imgUrl:img2,
      newMsg:1
    },
  ]
  return(
    <View style={{backgroundColor:'white'}}>
        <FlatList
      contentContainerStyle={{ paddingBottom:100 }}
      data={data}
      renderItem={({item})=>(
        <TouchableOpacity>
          <View style={styles.info}>
            <TouchableOpacity>
              <Image
              style={styles.infoImg}
              source={item.imgUrl}
              />
            </TouchableOpacity>
              <View style={styles.infoText}>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.caption}>{`${(item.text).slice(0,36)}...`}</Text>
              </View>
              <View style={styles.infoUpdate}>
                  <Text style={styles.intoTime}>{item.time}</Text>
                  <Text style={styles.messageCount}>{item.newMsg}</Text>
              </View>     
          </View>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  info:{
    flexDirection:'row',
    marginHorizontal:20,
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:10,
    borderBottomWidth:1,
    paddingBottom:10,
    borderBottomColor:'#DCDCDC'
  },
  infoImg:{
    borderRadius:50,
    width:70,
    height:70
  },
  infoText:{
    width:'60%'
  },
  username:{
    fontSize:22,
    fontWeight:'bold'
  },
  caption:{
    fontSize:18,
  },
  infoTime:{
    color:'grey'
  },
  infoUpdate:{
      width:'20%',
      alignItems:'flex-end'
  },
  messageCount:{
    backgroundColor:'red',
    borderRadius:50,
    color:'white',
    paddingVertical:3,
    paddingHorizontal:8,
    fontSize:12
  }
})

