"use client"

import React, { useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import MyComponent from './src/components/my-component';
import ListItemRenderComp from './src/components/list-render-comp';

function App(): React.JSX.Element {


  let condition = false;
  let dynamicStyles = condition ? styles.blueText : styles.redText;
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
    <View style={styles.container}>
      {/* <Button title='Open Modal' onPress={openModal} /> */}
      <Pressable onPress={openModal} style={ 
        ({pressed}) => [styles.btn, { backgroundColor: pressed ? 'yellow' : 'green' } ] 
        }>
          <Text style={styles.myCustomText}>Open Modal</Text>
      </Pressable>
      <Modal visible={isModalOpen} animationType='slide' onRequestClose={closeModal}>
        <View>
          <Text style={ {fontSize:40} }>This is a modal!</Text>
          <Button title='Close' onPress={closeModal} />
        </View>
      </Modal>
      <Text style={ {fontSize: 30, color: '#55AA55'} }>Hello World!</Text>
      <Text style={ styles.myCustomText }>Hello World!</Text>
      <Text style={ {...styles.myCustomText, ...dynamicStyles} }>Hello World!</Text>
      <MyComponent />
      <Image source={require('./src/assets/images/cat.jpg')} style={styles.customImage} />
      {/* <Image source={ { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sheba1.JPG/800px-Sheba1.JPG' } } style={styles.customImage} /> */}
      <Text>Password:</Text>
      <TextInput placeholder='password' keyboardType='default' secureTextEntry={true} />
      


      {/* <FlatList data={data} renderItem={ListItemRenderComp} keyExtractor={ item => item.id.toString() } /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  myCustomText: {
    fontSize: 24,
    // textAlign: 'center'
  },
  redText: {
    color: 'red'
  },
  blueText: {
    color: 'blue'
  },
  customImage: {
    width: 200,
    height: 200
  }

});

export default App;
