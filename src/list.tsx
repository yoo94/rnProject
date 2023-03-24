import React from 'react';
import { SafeAreaView, StyleSheet, Button, View, FlatList, Text, TextInput } from 'react-native';
// import SearchBar from 'react-native-search-bar';
import Data from './data.json';

const TextInputExample = () => {
  const updateList = () => {};

  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View>
        <SafeAreaView style={styles.buttons}>
          <Button title="전체보기" color="#9C27B0" onPress={updateList} />
          <Button title="서비스" color="#9C27B0" onPress={updateList} />
          <Button title="어플" color="#9C27B0" onPress={updateList} />
          <Button title="이용방법" color="#9C27B0" onPress={updateList} />
          <Button title="고객센터" color="#9C27B0" onPress={updateList} />
        </SafeAreaView>
        <TextInput placeholder="검색어를 입력해라!" onChangeText={(text) => text} />
      </View>
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const DATA = Data;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttons: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default TextInputExample;
