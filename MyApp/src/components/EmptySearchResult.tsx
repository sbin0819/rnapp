import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const message = {
  NOT_FOUND: '검색 결과가 없습니다.',
  EMPTY_KEYWORD: '검색어를 입력하세요',
};

function EmptySearchResult({type}: {type: 'NOT_FOUND' | 'EMPTY_KEYWORD'}) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{message[type]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#9e9e9e',
    fontSize: 16,
  },
});

export default EmptySearchResult;
