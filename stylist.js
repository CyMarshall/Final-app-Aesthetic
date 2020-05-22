import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight,ScrollView} from 'react-native';


class Stylist extends React.Component {




render(){
return(
<View style={styles.container}>
<Text style={styles.logoText}>
Professional Stylist
</Text>

<ScrollView>


<ScrollView>
<Text style={styles.titles}>
I want you to choose a style icon like Michelle Obama, Refined and Fun
</Text>
<TouchableHighlight
onPress={() => this.props.navigation.navigate('Michelle')}
>
 <Image source ={{uri: 'https://codehs.com/uploads/8f79e315fed3c2bbf79d8c62092b77e8'}}
 style={{ height: 250, width: 180, justifyContent: 'center', margin: 40, alignContent: 'center', }}
 />
 </TouchableHighlight>
 <Text style={styles.titles}>
Princess Diana, Royalty and Big Events
</Text>
<TouchableHighlight
onPress={() => this.props.navigation.navigate('Di')}
>
 <Image source ={{uri: 'https://www.hellomagazine.com/imagenes/royalty/2017080141022/princess-diana-most-iconic-outfits/0-213-906/diana-outfits-t.jpg'}}
 style={{ height: 250, width: 180, justifyContent: 'center', margin: 40, alignContent: 'center', }}
 />
 </TouchableHighlight>
  <Text style={styles.titles}>
Rihanna, Bold and Creative
</Text>
<TouchableHighlight
onPress={() => this.props.navigation.navigate('Riri')}
>
 <Image source ={{uri: 'https://codehs.com/uploads/3382abb19c4fb43e74b9665a89a07bd4'}}
 style={{ height: 250, width: 180, justifyContent: 'center', margin: 40, alignContent: 'center', }}
 />
 </TouchableHighlight>
 <Text style={styles.titles}>
Virgil Abloh, Street Style
</Text>
<TouchableHighlight
onPress={() => this.props.navigation.navigate('Abloh')}
>
 <Image source ={{uri: 'https://codehs.com/uploads/14fd1c1b61d8b5e7461346571f9fa784'}}
 style={{ height: 250, width: 180, justifyContent: 'center', margin: 40, alignContent: 'center', }}
 />
 </TouchableHighlight>


</ScrollView>
<View style={styles.middleContainer}>



</View>

<View style={styles.textContainer}>
<TouchableHighlight
onPress={() => this.props.navigation.navigate('')}
>
<View style={styles.touchableButton1}>
<Text style={styles.buttonText}>
NEXT


</Text>
</View>


</TouchableHighlight>
</View>
</ScrollView>
</View>

)
}
}
const styles= StyleSheet.create({
container:{
flex:1,
alignItems:'center',
justifyContent:'center',
backgroundColor:'blue',
margin:20,

},












logoText: {

fontSize: 28,
fontWeight:'bold',
justifyContent: 'center',
alignItems: 'center',
},

touchableButton1: {
backgroundColor: '#7d0ae6',
height: 40,
width: 200,
alignItems: 'center',
justifyContent: 'center',
marginTop: 100,
marginBottom: 50,
borderRadius: 10,


},

buttonText: {
fontSize: 14,
fontWeight:'bold',
}


});
export default Stylist;

