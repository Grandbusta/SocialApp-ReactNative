import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons'

export default function ChatHeader({navigation,user}) {
  return(
      <View style={styles.box}>
        <View style={styles.info}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <View style={styles.infoTop}>
                <Ionicons name="arrow-back" size={28} color="black" />
                <Image
                source={user.imgUrl}
                style={styles.pic}
                />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.infoText}>
              <Text style={styles.username}>{user.username}</Text>
              <Text style={styles.state}>Online</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Entypo name="dots-three-vertical" size={26} color="black" />
        </View>
      </View>
  )
}

const styles =  StyleSheet.create({
    box:{
        paddingTop:10,
        paddingHorizontal:'2%',
        paddingBottom:15,
        backgroundColor:'#F5F5F5',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    info:{
      flexDirection:'row',
      alignItems:'center'
    },
    infoTop:{
      flexDirection:'row',
      alignItems:'center'
    },
    infoText:{
      marginLeft:15
    },
    username:{
      fontSize:22
    },
    state:{
      fontSize:16
    },
    pic:{
      width:50,
      height:50,
      borderRadius:50
    }
})