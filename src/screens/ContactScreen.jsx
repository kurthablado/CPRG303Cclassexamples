import { Button, Text, View } from "react-native";


export default function ContactScreen({navigation}){

    return (
        <View>
            <Text>Contact</Text>
            <Button title="Go Back" onPress={ () => navigation.goBack() } />
            <Button title="Go Home" onPress={ () => navigation.popToTop() } />
        </View>
    );
}