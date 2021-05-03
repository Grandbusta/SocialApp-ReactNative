import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header({title}) {
    return(
        <View style={styles.box}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    box:{
        paddingTop:50,
        paddingBottom:20,
        elevation:1
    },
    headerText:{
        fontSize:28,
        textAlign:'center',
        fontWeight:'bold'
    }
})