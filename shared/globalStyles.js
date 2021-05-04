import { StyleSheet } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters'

const globalStyles = ScaledSheet.create({
    container: {
    flex:1,
    padding:'3%',
    alignItems:'center',
    backgroundColor:'red'
  },
  illustration: {
    width:'100%',
    resizeMode:'contain'
  },
  title:{
    fontSize:35,
    alignSelf:'center',
    fontWeight:'bold'
  },
  text: {
    color:'grey',
    alignSelf:'center',
    textAlign:'center',
  },
  btnText: {
    backgroundColor:'#1DA1F2',
    color:'white',
    fontWeight:'bold',
    fontSize:'20@s',
    paddingVertical:'20@vs',
    paddingHorizontal:'30@ms',
    textAlign:'center',
    borderRadius:20
  },
  btn: {
    width:'100%',
    marginVertical:'20@vs'
  },
  sign: {
    flexDirection:'row',
    textAlign:'center',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'center'
  },
  sview:{
    width:'100%',
    marginVertical:'4%'
  },
  stext: {
    fontSize:'18@s'
  },
  iconbtn: {
    marginTop:'2%',
    paddingVertical:'5%',
    paddingHorizontal:'20%',
    backgroundColor:'#F8F8F8',
    borderRadius:20,
    alignSelf:'center'
  },
  socialview:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textinput:{
    backgroundColor:'#F5F5F5',
    marginVertical:'3%',
    paddingVertical:'20@ms',
    paddingHorizontal:'5%',
    fontSize:'20@ms',
    borderRadius:10
  },
})


export default globalStyles
