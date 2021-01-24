import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const List = ({item}) => {
  return (
    <TouchableOpacity style={styles.list}>
      <View style={styles.listView}>
        <Text style={styles.listText}> {item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 15,
    //backgroundColor: 'lightblue',
  },
  listText: {
    fontSize: 50,
    fontWeight: '800',
    color: 'black',
  },
  listView: {},
});

export default List;
