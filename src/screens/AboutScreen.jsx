import { Button, Text, View } from "react-native";


export default function AboutScreen({navigation}){

    return (
        <View>
            <Text>About</Text>
            <Text>I'm using this app to learn react native!</Text>
            <Button title="Go to About... again!" onPress={ () => navigation.navigate("About") } />
            <Button title="Go to Contact" onPress={ () => navigation.navigate("Contact") } />
        </View>
    );
}