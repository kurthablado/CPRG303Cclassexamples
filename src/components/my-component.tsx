import { StyleSheet, Text, View } from "react-native";

function MyComponent() {

    let x = 3;
    let y = 4;

    return(
        <View>
            <Text style={compStyles.largerText}>Adding {x} to {y} will result in {x+y}</Text>
        </View>
    );
}

const compStyles = StyleSheet.create({
    largerText: {
        fontSize: 20
    }
});

export default MyComponent;