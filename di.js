import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, Text } from "react-native";


const supportedURL1 = "https://www.shopbop.com/";
const supportedURL2 = "https://www.neimanmarcus.com/";
const supportedURL3 = "https://www.modaoperandi.com/women";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
const handlePress = useCallback(async () => {
// Checking if the link is supported for links with custom URL scheme.
const supported = await Linking.canOpenURL(url);

if (supported) {
// Opening the link with some app, if the URL scheme is "http" the web link should be opened
// by some browser in the mobile
await Linking.openURL(url);
} else {
Alert.alert(`Don't know how to open this URL: ${url}`);
}
}, [url]);

return <Button title={children} onPress={handlePress} />;
};

const Di = () => {
return (
<View style={styles.container}>
<Text style= {styles.text}>
The People's Princess
</Text>
<OpenURLButton url={supportedURL1}>norma kamali</OpenURLButton>
<OpenURLButton url={supportedURL2}>neiman marcus </OpenURLButton>
<OpenURLButton url={supportedURL3}>moda operandi</OpenURLButton>

</View>
);
};

export default Di;

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#9E24D4' },
text: {
justifyContent: 'center',
alignItems: 'center',
fontSize:40,
color:'red',
fontFamily:'Playfair Display SC',
}
})
