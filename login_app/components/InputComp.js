import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native'

const InputComp = ({ title }) => {
    const [Text, setText] = useState();

    const handleText = (newText) => {
      setText(newText);
    };

    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder={title}
          onChangeText={handleText}
          value={Text}
        ></TextInput>
      </View>
    );
}

const styles = StyleSheet.create({
    input: {
    width: 300,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    color: '#ADADAD',
    borderWidth: 1,
    borderColor: '#ADADAD',
    marginBottom: 15
  },
})
export default InputComp