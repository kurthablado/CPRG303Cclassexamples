import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native";

export default function Counter(){

    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        // counter = counter + 1; // do not do this!
        setCounter( counter + 1 );
        setCounter( counter + 1 );
        setCounter( counter + 1 );
        setCounter( counter + 1 );
    }

    return(
        <View>
            <Text style={compStyles.biggerText}>Counter: {counter}</Text>
            <Button title="Increment Counter!" onPress={incrementCounter} />
        </View>
    )
}

const compStyles = StyleSheet.create({
    biggerText: {
        fontSize:32,
        color: 'blue'
    }
});