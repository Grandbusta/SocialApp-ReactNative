import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, ScrollView, FlatList, TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { AntDesign,FontAwesome,Feather } from '@expo/vector-icons'
import { Formik } from 'formik'
import globalStyles from '../shared/globalStyles'
import SearchHeader from '../shared/searchHeader'

const img=require('../assets/Images/grandpost.jpeg')
const img2 = require('../assets/Images/profileimg.jpg')
const img3 = require('../assets/Images/img.jpg')
const img4 = require('../assets/Images/afri.jpg')
const img5 = require('../assets/Images/sit.jpg')
const img6 = require('../assets/Images/gele.jpg')
const img7 = require('../assets/Images/jide.jpg')
const img8 = require('../assets/Images/busta.jpeg')

export default function People({navigation}) {
  const data=[
    {
      key:'1',
      username:'Grandbusta',
      caption:'All is for the best surely and correct',
      followed:true,
      imgUrl:img
    },
    {
      key:'2',
      username:'Olamide Badoo',
      caption:'All is for the best surely and correct',
      followed:false,
      imgUrl:img2
    },
    {
      key:'3',
      username:'Boluwatife John',
      caption:'All is for the best surely and correct',
      followed:false,
      imgUrl:img3
    },
    {
      key:'4',
      username:'Kakashi sensei',
      caption:'All is for the best surely and correct',
      followed:false,
      imgUrl:img4
    },
    {
      key:'5',
      username:'Uzumaki Naruto',
      caption:'All is for the best surely and correct',
      followed:true,
      imgUrl:img5
    },
    {
      key:'6',
      username:'Hokage sama',
      caption:'All is for the best surely and correct',
      followed:true,
      imgUrl:img6
    },
    {
      key:'7',
      username:'Tsunade sama',
      caption:'All is for the best surely and correct',
      followed:false,
      imgUrl:img7
    },
    {
      key:'8',
      username:'Ero senin',
      caption:'All is for the best surely and correct',
      followed:true,
      imgUrl:img8
    },
    {
      key:'9',
      username:'Wizkid',
      caption:'All is for the best surely and correct',
      followed:false,
      imgUrl:img
    },
    {
      key:'10',
      username:'Elijah Mikelson',
      caption:'I live by my honour everytime',
      followed:true,
      imgUrl:img3
    },
    {
      key:'11',
      username:'Jack Dorsey',
      caption:'All is for the best surely and correct',
      followed:true,
      imgUrl:img2
    },
  ]
    return(
        <View style={{backgroundColor:'white'}}>
          <SearchHeader/>
          <FlatList
          contentContainerStyle={{ paddingBottom:150 }}
          data={data}
          renderItem={({item})=>(
            <View style={styles.info}>
              <TouchableOpacity>
                <Image
                style={styles.infoImg}
                source={item.imgUrl}
                />
              </TouchableOpacity>
                <View style={styles.infoText}>
                  <Text style={styles.username}>{item.username}</Text>
                  <Text style={styles.caption}>{item.caption}</Text>
                </View>     
                  <TouchableOpacity style={item.followed?styles.flbtnTrue:styles.flbtnFalse}>
                    <Text style={styles.btnText}>
                      {item.followed?'Unfollow':'Follow'}
                    </Text>
                  </TouchableOpacity>
            </View>
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
  flbtnFalse:{
    backgroundColor:'#0000CD',
    paddingVertical:10,
    borderRadius:10,
    width:'20%'
  },
  flbtnTrue:{
    backgroundColor:'grey',
    paddingVertical:10,
    borderRadius:10,
    width:'20%'
  },
  btnText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  }
})

