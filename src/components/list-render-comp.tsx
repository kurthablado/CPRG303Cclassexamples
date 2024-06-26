
import { Text } from "react-native";

// declaring type with props in typescript
export default function ListItemRenderComp( {item}:{ item:{id:number,text:string} } ){
    
    return(
        <Text>{item.text}</Text>
    );

}