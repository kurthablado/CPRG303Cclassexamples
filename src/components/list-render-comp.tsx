import { ReactNode } from "react";
import { Text } from "react-native";


export default function ListItemRenderComp({item = {id:0, text:"default text"}}){
    
    return(
        <Text>{item.text}</Text>
    );
}