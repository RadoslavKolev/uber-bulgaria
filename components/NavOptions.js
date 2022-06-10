import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import {selectOrigin} from '../slices/navSlice';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",  // TODO: Change in the future
  },
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
      // Navigates to MapScreen
      onPress={() => navigation.navigate(item.screen)}
      disabled={!origin}
    >
      <View style={tw`${!origin && 'opacity-20'}`}>
        <Image 
          style={{
            width: 120, height: 120, resizeMode: 'contain'
          }}
          source={{ uri: item.image}}
        />
        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
        <Icon 
          style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          name='arrowright'
          color='white'
          type='antdesign'
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.title}
    renderItem={renderItem}
    />
  );
};

export default NavOptions;

