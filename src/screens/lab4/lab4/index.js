import React, { useState } from 'react';
import {FlatList, Image, RefreshControl, SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import { styles } from './style';

const DATA = [
  {
      id: '1',
      title: 'Charlie',
      gmail: 'charlie@gmail.com',
      image: require('../../assests/anh1.jpg'),
      text: 'Call',
  },

  {
      id: '2',
      title: 'Tom',
      gmail: 'tom@gmail.com',
      image: require('../../assests/anh3.jpg'),
      text: 'Call',
  },

  {
      id: '3',
      title: 'Michael',
      gmail: 'michael@gmail.com',
      image: require('../../assests/anh2.jpg'),
      text: 'Call',
  },

  {
      id: '4',
      title: 'Thomas',
      gmail: 'thomas@gmail.com',
      image: require('../../assests/anh3.jpg'),
      text: 'Call',
  },

  {
      id: '5',
      title: 'Jerry',
      gmail: 'jerry@gmail.com',
      image: require('../../assests/anh1.jpg'),
      text: 'Call',
  },

  {
      id: '6',
      title: 'Mile',
      gmail: 'mile@gmail.com',
      image: require('../../assests/anh1.jpg'),
      text: 'Call',
  },
];

const Item = ({title, gmail, image, text}) => (
  <View style = {styles.item}>
    <Text style = {styles.title}>{title}</Text>
    <Text style = {styles.gmail}>{gmail}</Text>
    <Image source = {image} style = {styles.avatar}></Image>
    <Text style = {styles.text1}>{text}</Text>
  </View>
);

const Lab4 = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar
      barStyle = "dark-content"
      hidden = {false}
      backgroundColor = "lightblue"
      translucent = {false}/>
    
      <FlatList
        data = {DATA}
        renderItem = {({item}) => <Item title = {item.title}
                                        gmail = {item.gmail} 
                                        image = {item.image}
                                        text = {item.text} />
                                  }
        keyExtractor = {item => item.id}
      />
    </SafeAreaView>
  );
};

export default React.memo(Lab4);
