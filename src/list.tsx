import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  FlatList,
  Text,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
// import SearchBar from 'react-native-search-bar';
import Data from './data.json';

const TextInputExample = () => {
  // const searchData = (text: string) => {
  //   Alert.alert(text);
  // };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <SafeAreaView style={styles.buttons}>
          <Button
            title="전체보기"
            color="#9C27B0"
            onPress={() => filterItems('전체보기')}
          />
          <Button
            title="서비스"
            color="#9C27B0"
            onPress={() => filterItems('서비스')}
          />
          <Button
            title="어플"
            color="#9C27B0"
            onPress={() => filterItems('어플')}
          />
          <Button
            title="이용방법"
            color="#9C27B0"
            onPress={() => filterItems('이용방법')}
          />
          <Button
            title="고객센터"
            color="#9C27B0"
            onPress={() => filterItems('고객센터')}
          />
        </SafeAreaView>
        <TextInput
          placeholder="검색어를 입력해라!"
          onChangeText={(text: string) => filterItems(text)}
        />
      </View>
      <View style={styles.container}>
        <ScrollView>
          {DATA.map((item, index) => {
            return (
              <View key={index} style={styles.container}>
                <View>
                  <Text style={styles.item}>{item.title}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
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
