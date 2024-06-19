
import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import MyComponent from './src/components/my-component';

function App(): React.JSX.Element {

  let condition = false;
  let dynamicStyles = condition ? styles.blueText : styles.redText;

  const simpleFunc = () => {
    Alert.alert('Hello World!');
  }

  return (
    <View style={styles.container}>
      <Text style={ {fontSize: 30, color: '#55AA55'} }>Hello World!</Text>
      <Text style={ styles.myCustomText }>Hello World!</Text>
      <Text style={ {...styles.myCustomText, ...dynamicStyles} }>Hello World!</Text>
      <MyComponent />
      <Image source={require('./src/assets/images/cat.jpg')} style={styles.customImage} />
      {/* <Image source={ { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sheba1.JPG/800px-Sheba1.JPG' } } style={styles.customImage} /> */}
      <Text>Password:</Text>
      <TextInput placeholder='password' keyboardType='default' secureTextEntry={true} />
      <Button title='Press me!' onPress={simpleFunc} />
    </View>
  );
}

const styles = StyleSheet.create({
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
