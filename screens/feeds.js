import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity, ScrollView,Image, FlatList, TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { Formik } from 'formik'
import { Ionicons } from '@expo/vector-icons';
import globalStyles from '../shared/globalStyles'
import FeedCard from '../shared/feedCard'
import CustomHeader from '../shared/header'
const busta=require('../assets/Images/grandpost.jpeg')
const beauty=require('../assets/Images/profileimg.jpg')

export default function Feeds({navigation}) {
    const data = [
        {
            key:'1',
            username:'grandbusta',
            time:'2 min ago',
            url:busta
        },
        {
            key:'2',
            username:'olamide',
            time:'23 min ago',
            url:beauty
        }
    ]
    return(
        <View style={{backgroundColor:'white'}}>
            <CustomHeader title='Social'/>
                <FlatList
                contentContainerStyle={{ paddingBottom: 100 }}
                    data={data}
                    renderItem={({item})=>(
                        <FeedCard username={item.username} time={item.time} url={item.url}/>
                    )}
                />
        </View>
    )
}