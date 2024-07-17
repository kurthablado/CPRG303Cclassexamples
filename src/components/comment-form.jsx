"use client"

import { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput } from "react-native";

export default function CommentForm({handleNewComment, noOfComments}){
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const handleNameChange = (value) => setName(value);
    const handleMessageChange = (value) => setMessage(value);
    const handleSubmit = () => {
        let newComment = {
            id: noOfComments + 1,
            name: name,
            message: message
        }
        handleNewComment(newComment);
        setName("");
        setMessage("");
    }
    return(
        <SafeAreaView>
            <Text>Please leave us a comment!</Text>
            <Text>Name:</Text>
            <TextInput onChangeText={handleNameChange} value={name} />
            <Text>Message:</Text>
            <TextInput onChangeText={handleMessageChange} value={message} />
            <Pressable onPress={handleSubmit}>
                <Text>Submit Comment</Text>
            </Pressable>
        </SafeAreaView>
    );
}