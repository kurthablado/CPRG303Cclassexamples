"use client"

import { Alert, Button, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { mainStyles } from '../assets/styles/styles';
import MyComponent from '../components/my-component';
import Counter from '../components/counter';
import { useState } from 'react';

export default function TestScreen({navigation}){

    let person = {
        fname: 'John',
        age: 25,
        email: 'john@sait.ca'
      };
    
      let condition = false;
      let dynamicStyles = condition ? mainStyles.blueText : mainStyles.redText;
      let data = [];
      for (let i = 0; i < 100; i++) {
        let thisItem = { id: i, text: `Item #${i}` };
        data.push(thisItem);
      }
      const simpleFunc = () => {
        Alert.alert('Hello World!');
      }
    
      const [isModalOpen, setModalOpen] = useState(false);
      const closeModal = () => setModalOpen(false);
      const openModal = () => setModalOpen(true);

    return (
        <View style={mainStyles.container}>
      {/* <Button title='Open Modal' onPress={openModal} /> */}
      <Pressable onPress={openModal} style={ 
        ({pressed}) => [mainStyles.btn, { backgroundColor: pressed ? 'yellow' : 'green' } ] 
        }>
          <Text style={mainStyles.myCustomText}>Open Modal</Text>
      </Pressable>
      <Modal visible={isModalOpen} animationType='slide' onRequestClose={closeModal}>
        <View>
          <Text style={ {fontSize:40} }>This is a modal!</Text>
          <Button title='Close' onPress={closeModal} />
        </View>
      </Modal>
      <Text style={ {fontSize: 30, color: '#55AA55'} }>Hello World!</Text>
      <Text style={ mainStyles.myCustomText }>Hello World!</Text>
      <Text style={ {...mainStyles.myCustomText, ...dynamicStyles} }>Hello World!</Text>
      <MyComponent />
      <Image source={require('../assets/images/cat.jpg')} style={mainStyles.customImage} />
      {/* <Image source={ { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sheba1.JPG/800px-Sheba1.JPG' } } style={styles.customImage} /> */}
      <Text>Password:</Text>
      <TextInput placeholder='password' keyboardType='default' secureTextEntry={true} />
      
      {/* <CompWithProps personObj={person} /> */}
      <Counter />

      {/* <FlatList data={data} renderItem={ListItemRenderComp} keyExtractor={ item => item.id.toString() } /> */}
    </View>
    );
}