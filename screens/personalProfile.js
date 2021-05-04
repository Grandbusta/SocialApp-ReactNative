import React from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import CustomHeader from '../shared/header'
import { img,img2,img3,img4,img5,img6,img7,img8 } from '../shared/images'
import {ScaledSheet} from 'react-native-size-matters'


export default function PersonalProfile({navigation}) {
  const data = [
    {
      key:'1',
      imgUrl:img
    },
    {
      key:'2',
      imgUrl:img2
    },
    {
      key:'3',
      imgUrl:img3
    },
    {
      key:'4',
      imgUrl:img4
    },
    {
      key:'5',
      imgUrl:img5
    },
    {
      key:'6',
      imgUrl:img6
    },
    {
      key:'7',
      imgUrl:img7
    },
    {
      key:'8',
      imgUrl:img8
    },
    {
      key:'9',
      imgUrl:img
    },
    {
      key:'10',
      imgUrl:img2
    },
    {
      key:'11',
      imgUrl:img3
    },
    {
      key:'12',
      imgUrl:img5
    },
    {
      key:'13',
      imgUrl:img4
    },
    {
      key:'14',
      imgUrl:img6
    },
    {
      key:'15',
      imgUrl:img7
    },
    {
      key:'16',
      imgUrl:img8
    },
    {
      key:'17',
      imgUrl:img
    },
    {
      key:'18',
      imgUrl:img2
    },
  ]
  return(
    <View style={{backgroundColor:'white'}}>
      <CustomHeader title='Profile'/>
      <ScrollView>
      <View>
        <View style={styles.proView}>
          <View style={styles.details}>
              <View>
                  <Image
                  source={img}
                  style={styles.userPicture}
                  />
              </View>
              <View style={styles.info}>
                  <View style={styles.numView}>
                      <Text style={styles.infoNum}>31</Text>
                      <Text style={styles.infoType}>Posts</Text>
                  </View>
                  <View style={styles.numView}>
                      <Text style={styles.infoNum}>250</Text>
                      <Text style={styles.infoType}>Followers</Text>
                  </View>
                  <View style={styles.numView}>
                      <Text style={styles.infoNum}>286</Text>
                      <Text style={styles.infoType}>Following</Text>
                  </View>
              </View>
          </View>
          <View>
              <Text style={styles.username}>Grandbusta</Text>
              <Text style={styles.status}>
                Another day, dressed to kill as usual, can't allow myselft to be used | Can be an engineer when needed. Love and light💕
              </Text>
              <View style={styles.personal}>
                <View style={styles.locale}>
                  <Ionicons name="location-outline" size={20} color='#686868' />
                  <Text style={styles.location}>Lagos, Nigeria</Text>
                </View>
                <View style={styles.locale}>
                  <Ionicons name="calendar-outline" size={20} color='#686868' />
                  <Text style={styles.location}>Joined January 2020</Text>
                </View>
              </View>
          </View>
        </View>
        <View>
        </View>
        <View style={styles.posts}>
          {data.map(item=>(
            
            <View key={item.key} style={styles.postImgView}>
              <TouchableOpacity>
              <Image
              source={item.imgUrl}
              style={styles.postImg}
              />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = ScaledSheet.create({
  proView:{
    marginHorizontal:'3%',
    marginTop:'2%'
  },
  details:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  userPicture:{
      borderRadius:50,
      width:90,
      height:90
  },
  info:{
      marginLeft:'2%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      flexGrow:1
  },
  numView:{
      padding:'8@s'
  },
  infoNum:{
      fontSize:'18@s',
      textAlign:'center'
  },
  infoType:{
      fontSize:'12@s'
  },
  username:{
      fontWeight:'bold',
      fontSize:28
  },
  status:{
    fontSize:'16@s',
    marginTop:5,
    paddingRight:30
  },
  locale:{
    flexDirection:'row',
    marginRight:'2%'
  },
  location:{
    fontSize:15,
    marginLeft:2,
    color:'#686868'
  },
  personal:{
    marginTop:'2%',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  posts:{
    marginTop:50,
    marginBottom:150,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'stretch'
  },
  postImg:{
    width:'100%',
    height:'100%',
  },
  postImgView:{
    width:'49.6%',
    height:200,
    marginVertical:2
  }
})
