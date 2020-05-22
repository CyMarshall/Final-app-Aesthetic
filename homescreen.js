import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Homescreen extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/094c640c26d096c2efa3eb651ed6b70b'}}
 style={{ height: 250, width: 250, justifyContent: 'center', }}
/>
          
          
            </View>


 

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Work')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                      Welcome 
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9E24D4',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },



   touchableButton1: {
        backgroundColor: 'gray',
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


export default Homescreen;
