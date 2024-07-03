import { StyleSheet, Text, View } from "react-native";


export default function CompWithProps({personObj}){

    const {fname,age,email = "N/A"} = personObj;

    return(
        <View>
            <Text style={compStyles.biggerText}>Name: {fname}</Text>
            <Text style={compStyles.biggerText}>Age: {age}</Text>
            <Text style={compStyles.biggerText}>Email: {email}</Text>
        </View>
    );

}

const compStyles = StyleSheet.create({
    biggerText: {
        fontSize:32,
        color: 'blue'
    }
});