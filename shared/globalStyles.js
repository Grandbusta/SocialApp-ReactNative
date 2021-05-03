import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
    flex:1,
    padding:20,
    alignItems:'center',
    backgroundColor:'white'
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
    fontSize:20,
    paddingVertical:30,
    paddingHorizontal:30,
    textAlign:'center',
    borderRadius:20
  },
  btn: {
    width:'100%',
    marginVertical:20
  },
  sign: {
    flexDirection:'row',
    alignItems:'center'
  },
  sview:{
    width:'100%',
    marginVertical:30
  },
  stext: {
    fontSize:18
  },
  iconbtn: {
    marginTop:20,
    paddingVertical:30,
    paddingHorizontal:100,
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
    marginVertical:20,
    paddingVertical:30,
    paddingHorizontal:25,
    fontSize:25,
    borderRadius:10
  },
})


export default globalStyles
