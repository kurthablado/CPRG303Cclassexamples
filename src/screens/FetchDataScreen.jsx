"use client"

import { useEffect, useState } from "react";
import {SafeAreaView} from "react-native";

export default function FetchDataScreen({navigation}) {

    const [duckData, setDuckData] = useState(null);

    async function fetchDuck() {
        try {
          const response = await fetch("https://random-d.uk/api/v2/random");
          if (!response.ok) {
            let data = {
            url: "https://www.duck.com/duck.jpg", // Example URL image
            message: "There was an error fetching the duck image."
          }
        }
          const data = await response.json();
          setDuckData(data);   // Update state 
        } catch (error) {
            let data = {
                url: "https://www.example.com/assets/images/404.jpg", // Example 404 image
                message: "The API server did not respond."
            }
            
        }
    }

    useEffect(() => {
        fetchDuck();
    }, [newDuck] );

    return(
        <SafeAreaView>
            <Text>Random Duck</Text>
            <Text>Fetching a random duck image from an API.</Text>
            { duckData ? (
                <View>
                    <Image source={ { uri: duckData.url} } style={ {width:300,height:300} } />
                    <Text>{duckData.url}</Text>
                    <Text>{duckData.message}</Text>
                    <Button title="New Duck!" onPress={ () => setNewDuck( Math.random() ) } />
                </View>
            ) : (
                <Text>Loading...</Text>
            ) }

        </SafeAreaView>
    );
}