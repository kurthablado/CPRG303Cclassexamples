"use client"

import { Button, Text, View } from "react-native";
import CommentForm from "../components/comment-form";
import CommentDisplay from "../components/comment-display";
import { useState } from "react";

const testData = [
    {
        id: 1,
        name: "Bob",
        message: "Hello World"
    },
    {
        id: 2,
        name: "Alice",
        message: "What's up?"
    },
    {
        id: 3,
        name: "John",
        message: "Hello everyone!"
    }
];

export default function ContactScreen({navigation}){

    const [commentList, setCommentList] = useState(testData);

    const submitComment = (newComment) => {
        setCommentList( [...commentList, newComment] );
    }

    return (
        <View>
            <Text>Contact</Text>
            <Button title="Go Back" onPress={ () => navigation.goBack() } />
            <Button title="Go Home" onPress={ () => navigation.popToTop() } />
            <CommentForm handleNewComment={submitComment} noOfComments={commentList.length} />
            <CommentDisplay commentList={commentList} />
        </View>
    );
}