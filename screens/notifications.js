import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList,Image} from 'react-native';
import CustomHeader from '../shared/header'
const img=require('../assets/Images/grandpost.jpeg')
const img2 = require('../assets/Images/profileimg.jpg')
const img3 = require('../assets/Images/img.jpg')
const img4 = require('../assets/Images/afri.jpg')
const img5 = require('../assets/Images/sit.jpg')
const img6 = require('../assets/Images/gele.jpg')
const img7 = require('../assets/Images/jide.jpg')
const img8 = require('../assets/Images/busta.jpeg')

export default function Notifications({navigation}) {
  const data=[
    {
      key:'1',
      text:'Grandbusta tagged you and 86 others in a post',
      time:'20 sec ago',
      imgUrl:img
    },
    {
      key:'2',
      text:'Olamide reacted to your comment',
      time:'2 min ago',
      imgUrl:img2
    },
    {
      key:'3',
      text:'Blessing Uzo shared your post',
      time:'15 min ago',
      imgUrl:img3
    },
    {
      key:'4',
      text:'Maxillae asked you to join a group',
      time:'16 min ago',
      imgUrl:img4
    },
    {
      key:'5',
      text:'Grandbusta tagged you and 86 others in a post',
      time:'30 min ago',
      imgUrl:img5
    },
    {
      key:'6',
      text:'Olamide reacted to your comment',
      time:'36 min ago',
      imgUrl:img6
    },
    {
      key:'7',
      text:'Blessing Uzo shared your post',
      time:'1 hour ago',
      imgUrl:img7
    },
    {
      key:'8',
      text:'Maxillae asked you to join a group',
      time:'1 hour ago',
      imgUrl:img8
    },
    {
      key:'9',
      text:'Grandbusta tagged you and 86 others in a post',
      time:'2 hours ago',
      imgUrl:img2
    },
    {
      key:'10',
      text:'Olamide reacted to your comment',
      time:'1 day ago',
      imgUrl:img
    },
    {
      key:'11',
      text:'Blessing Uzo shared your post',
      time:'1 day ago',
      imgUrl:img3
    },
    {
      key:'12',
      text:'Maxillae asked you to join a group',
      time:'2 days ago',
      imgUrl:img7
    },
  ]
    return(
        <View style={{backgroundColor:'white'}}>
            <CustomHeader title='Notifications'/>
            <FlatList
            contentContainerStyle={{ paddingBottom: 150 }}
            data={data}
            renderItem={({item})=>(
              <TouchableOpacity>
                <View style={styles.info}>
                    <Image
                    style={styles.infoImg}
                    source={item.imgUrl}
                    />
                      <Text style={styles.infoText}>{item.text}</Text>
                      <Text style={styles.intoTime}>{item.time}</Text>
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
    fontSize:22,
    width:'60%'
  },
  infoTime:{
    color:'grey'
  }
})
