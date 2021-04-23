import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { AntDesign,FontAwesome,Feather } from '@expo/vector-icons'
import { Formik } from 'formik'
import globalStyles from '../shared/globalStyles'

export default function PersonalProfile({navigation}) {
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>Personal profile page</Text>
        </View>
    )
}
