import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  const [todo, setTodo] = useState([
    {id: 1, text: 'Wakeup'},
    {id: 2, text: 'Workout'},
    {id: 3, text: 'Code'},
    {id: 4, text: 'Eat'},
    {id: 5, text: 'Debug'},
    {id: 6, text: 'Do it Again'},
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={todo} renderItem={({item}) => <List item={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
  },
});

export default App;
