import React from 'react';
import { View, FlatList } from 'react-native';
import FeedCard from '../shared/feedCard'
import CustomHeader from '../shared/header'
const busta=require('../assets/Images/grandpost.jpeg')
const beauty=require('../assets/Images/profileimg.jpg')

export default function Feeds() {
  const data = [
      {
          key:'1',
          username:'grandbusta',
          time:'2 min ago',
          url:busta,
          caption:'This is the day i have been waiting for like one of the best day of our life we have to keep up with'
      },
      {
          key:'2',
          username:'olamide',
          time:'23 min ago',
          url:beauty,
          caption:'This is the day i have been waiting for like one of the best day of our life we have to keep up with'
      }
  ]
  return(
      <View style={{backgroundColor:'white'}}>
          <CustomHeader title='Social'/>
              <FlatList
              contentContainerStyle={{ paddingBottom: 150 }}
                  data={data}
                  renderItem={({item})=>(
                      <FeedCard username={item.username} time={item.time} url={item.url} caption={item.caption}/>
                  )}
              />
      </View>
    )
}