
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App(): React.JSX.Element {

  let condition = false;

  let dynamicStyles = condition ? styles.blueText : styles.redText;

  return (
    <View style={styles.container}>
      <Text style={ {fontSize: 30, color: '#55AA55'} }>Hello World!</Text>
      <Text style={ styles.myCustomText }>Hello World!</Text>
      <Text style={ {...styles.myCustomText, ...dynamicStyles} }>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  myCustomText: {
    fontSize: 24,
    textAlign: 'center'
  },
  redText: {
    color: 'red'
  },
  blueText: {
    color: 'blue'
  }

});

export default App;
