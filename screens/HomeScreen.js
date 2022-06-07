import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Image } from 'react-native';
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <SafeAreaView style={[
      tw`bg-white h-full`, styles.AndroidSafeArea
    ]}>
      <View style={tw`p-5`}>
      <Image
          style={{
            width: 100, height: 100, resizeMode: 'contain'
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />         
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});