import React,{useState} from 'react';
import { StyleSheet, View, TextInput,Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Formik } from 'formik'

export default function SearchHeader() {
  const [blur,setBlur]=useState(true)
  return(
    <View style={styles.box}>
        <Formik initialValues={{search:''}}>
          {({handleChange,values})=>(
            <View style={styles.searchView}>
                {!blur&&(
                  <View style={styles.icon}>
                    <Ionicons
                    onPress={Keyboard.dismiss}
                    name="arrow-back-sharp"
                    size={26}
                    color="black" />
                  </View>
                )}
              <View style={styles.txt}>
              <TextInput
              style={styles.searchInput}
              placeholder='Search'
              onChangeText={handleChange('search')}
              value={values.search}
              onFocus={()=>{setBlur(false)}}
              onBlur={()=>{setBlur(true)}}
              />
              </View>
              {
                blur&&(
                  <View style={styles.icon}>
                  <Ionicons name="md-filter" size={24} color="black" />
                  </View>
                )
              }
            </View>
          )}
        </Formik>
    </View>
  )
}

const styles =  StyleSheet.create({
    box:{
        paddingTop:10,
        paddingBottom:'2%',
        paddingHorizontal:15
    },
    searchView:{
      flexDirection:'row',
      alignItems:'center',
      marginRight:20,
      justifyContent:'space-between'
    },
    txt:{
      width:'90%'
    },
    icon:{
      marginLeft:10
    },
    headerText:{
        fontSize:28,
        textAlign:'center',
        fontWeight:'bold'
    },
    searchInput:{
      paddingHorizontal:20,
      paddingVertical:10,
      fontSize:20
    },
})