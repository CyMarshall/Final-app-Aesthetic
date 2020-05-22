import React, { Component } from "react";


import { Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight} from 'react-native';


class Work extends React.Component {


  render() {
     
    return (
      
     
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>

<View style={styles.textContainer}>



          
          
           <Text style={styles.text}>
           Are you using our app as a stylist or for personal use 
           </Text>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Personal')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Personal
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Stylist')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Stylist
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            
          </View>
        </View>
     
    );
  }

}





const styles = StyleSheet.create({

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#3385DE',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},

touchableButton1: {
        backgroundColor: '#9E24D4',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
    borderWidth: 1,
    
   
    },
    logoText: {
  fontSize: 15,
  fontWeight: "800",
  marginBottom: 10,
   marginTop: 10,
  textAlign: 'center',
},

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 }
});


export default Work;
