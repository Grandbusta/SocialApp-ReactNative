import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image, FlatList, TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FeedCard({navigation,username,time,url}) {
    return(
            <View style={styles.singleCard}>
                <View style={styles.postInfo}>
                    <View style={styles.profileInfo}>
                        <Image
                        source={url}
                        style={styles.profilePic}
                        />
                        <Text style={styles.username}>{username}</Text>
                    </View>
                    <View>
                        <Text>{time}</Text>
                    </View>
                </View>
                <Image
                style={styles.postImg}
                source={url}
                />
                <View style={styles.activityinfo}>
                    <View style={styles.like}>
                        <Ionicons name="heart-outline" size={26} color="black" />
                        <Text style={styles.likeText}>300</Text>
                    </View>
                    <View style={styles.comment}>
                        <Ionicons name="chatbubble-outline" size={26} color="black" />
                        <Text style={styles.likeText}>23</Text>
                    </View>
                    <View style={styles.comment}>
                        <Ionicons name="share-social-outline" size={26} color="black" />
                    </View>
                </View>
                <View>
                    <Text style={styles.captionCamp}>
                        <Text style={styles.captionUsername}>grandbusta </Text>
                        <Text style={styles.captionText}>
                            This is the day i have been waiting for like one of the best day of our life we have to keep up with
                        </Text>
                    </Text>
                </View>
            </View>
    )
}

const styles= StyleSheet.create({
    singleCard:{
        elevation:0.4
    },
    username:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:10,
        marginVertical:20
    },
    captionUsername:{
        fontSize:16,
        fontWeight:'bold',
    },
    captionText:{
        fontSize:16,
    },
    captionCamp:{
        marginHorizontal:20,
        marginTop:5,
        marginBottom:25
    },
    profilePic:{
        borderRadius:50,
        width:40,
        height:40
    },
    profileInfo:{
        flexDirection:'row',
        alignItems:'center'
    },
    postInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:20
    },
    postImg:{
        width:'100%',
        height:500,
        alignSelf:'center'
    },
    activityinfo:{
        marginHorizontal:20,
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center'
    },
    like:{
        flexDirection:'row',
        alignItems:'center'
    },
    comment:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20
    },
    likeText:{
        fontSize:18,
        marginLeft:4
    }
})