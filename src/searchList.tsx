import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  StyleSheet,
} from 'react-native';

const TextInputExample = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    void fetchData('http://localhost:8081/src/data.json');
    console.log(data);
  }, []);

  const fetchData = async (url: string) => {
    try {
      const res = await fetch(url);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const json = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setData(json);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setFilteredData(json);
    } catch (error) {
      console.log(error);
    }
  };
  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = data.filter((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View>
        <SafeAreaView style={styles.buttons}>
          <Button
            title="전체보기"
            color="#9C27B0"
            onPress={() => searchFilterFunction()}
          />
          <Button
            title="서비스"
            color="#9C27B0"
            onPress={() => searchFilterFunction('서비스')}
          />
          <Button
            title="어플"
            color="#9C27B0"
            onPress={() => searchFilterFunction('어플')}
          />
          <Button
            title="이용방법"
            color="#9C27B0"
            onPress={() => searchFilterFunction('이용방법')}
          />
          <Button
            title="고객센터"
            color="#9C27B0"
            onPress={() => searchFilterFunction('고객센터')}
          />
        </SafeAreaView>
        <TextInput
          placeholder="검색어를 입력해라!"
          onChangeText={(text) => {
            searchFilterFunction(text);
          }}
        />
      </View>
      <ScrollView>
        {filteredData.map((item, index) => {
          console.log(item);
          return (
            <View key={index}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.content}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

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
