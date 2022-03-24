import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import EmptySearchResult from '../components/EmptySearchResult';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
import SearchContext from '../contexts/SearchContext';

interface Log {
  id: any;
  title: any;
  body: any;
  date: any;
}

function SearchScreen() {
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : (logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        ) as Log[]);

  if (keyword === '') {
    console.log('k', keyword);
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }

  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }
  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default SearchScreen;
