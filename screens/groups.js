import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, TextInput,Image,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { AntDesign,FontAwesome,Feather } from '@expo/vector-icons'
import { Formik } from 'formik'
import SearchHeader from '../shared/searchHeader'
const img=require('../assets/Images/grandpost.jpeg')
const img2 = require('../assets/Images/profileimg.jpg')
const img3 = require('../assets/Images/img.jpg')
const img4 = require('../assets/Images/afri.jpg')
const img5 = require('../assets/Images/sit.jpg')
const img6 = require('../assets/Images/gele.jpg')
const img7 = require('../assets/Images/jide.jpg')
const img8 = require('../assets/Images/busta.jpeg')

export default function Groups({navigation}) {
const data=[
    {
      key:'1',
      name:'Sololearn Nigeria💻',
      time:'12:25',
      lastSender:'Oliva',
      lastSent:'All is for the best surely and correct',
      imgUrl:img,
      newMsg:1
    },
    {
      key:'2',
      name:'OSC Nigeria💯💻',
      time:'13:34',
      lastSender:'Lord future',
      lastSent:'All is for the best surely and correct',      
      imgUrl:img2,
      newMsg:34
    },
    {
      key:'3',
      name:'Crypto Lords📈',
      time:'3:36',
      lastSender:'Busta',
      lastSent:'All is for the best surely and correct',
      imgUrl:img3,
      newMsg:540
    },
    {
      key:'4',
      name:'Perky Makers😁',
      time:'2:10',
      lastSender:'Blinder',
      lastSent:'All is for the best surely and correct',      
      imgUrl:img4,
      newMsg:23
    },
    {
      key:'5',
      name:'Naruto fans⚔️',
      time:'2:09',
      lastSender:'Uzumaki',
      lastSent:'All is for the best surely and correct', 
      imgUrl:img5,
      newMsg:89
    },
    {
      key:'6',
      name:'Erica Stan💕',
      time:'2:05',
      lastSender:'Loveth',
      lastSent:'All is for the best surely and correct',
      imgUrl:img6,
      newMsg:101
    },
    {
      key:'7',
      name:'Class \'23 cruise🤾‍♀️',
      time:'1:00',
      lastSender:'Rep',
      lastSent:'All is for the best surely and correct',
      imgUrl:img7,
      newMsg:98
    },
    {
      key:'8',
      name:'Matchmakers💑',
      time:'0:00',
      lastSender:'Prince',
      lastSent:'All is for the best surely and correct',
      imgUrl:img8,
      newMsg:1
    },
    {
      key:'9',
      name:'Vampire lovers☠️',
      time:'11:59',
      lastSender:'Elijah',
      lastSent:'All is for the best surely and correct',
      imgUrl:img,
      newMsg:3
    },
    {
      key:'10',
      name:'Daily motivation 😀',
      time:'11:34',
      lastSender:'Blessing',
      lastSent:'All is for the best surely and correct',
      imgUrl:img3,
      newMsg:892
    }
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
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.caption}>{`${(`${item.lastSender}: `).concat(item.lastSent).slice(0,36)}...`}</Text>
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

