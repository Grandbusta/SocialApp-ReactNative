import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FeedCard({caption,username,time,url}) {
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
                        <Text style={styles.captionUsername}>{username} </Text>
                        <Text style={styles.captionText}>
                            {caption}
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
        color:'black',
        fontSize:20,
        fontWeight:"bold",
        marginLeft:10,
        marginVertical:20
    },
    captionUsername:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
    },
    captionText:{
        color:'black',
        fontSize:16,
    },
    captionCamp:{
        color:'black',
        marginLeft:10,
        marginRight:30,
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
        color:'black',
        marginHorizontal:10,
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
        color:'black',
        fontSize:18,
        marginLeft:4
    }
})