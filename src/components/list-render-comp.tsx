import { Text } from "react-native";


export default function ListItemRenderComp({item}){
    
    return(
        <Text>{item.text}</Text>
    );
}