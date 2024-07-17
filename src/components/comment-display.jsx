import { FlatList, SafeAreaView, Text, View } from "react-native";

function Comment({cObj}){
    return(
        <View>
           <Text>Name: {cObj.name}</Text>
           <Text>Message: {cObj.message}</Text>
        </View>
    );
}
export default function CommentDisplay({commentList}){
    return(
        <SafeAreaView>
            <FlatList
            data={commentList}
            renderItem={ ({item}) => <Comment cObj={item} /> }
            keyExtractor={ item => item.id}
            />
        </SafeAreaView>
    );
}