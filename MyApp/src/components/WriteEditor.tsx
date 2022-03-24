import React, {useRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

interface Props {
  title: any;
  body: any;
  onChangeTitle: any;
  onChangeBody: any;
}
function WriteEditor({title, body, onChangeTitle, onChangeBody}: Props) {
  const bodyRef = useRef<any>();
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="input title..."
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <TextInput
        placeholder="input body..."
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export default WriteEditor;
