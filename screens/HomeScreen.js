import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Image } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => { 
  const dispatch = useDispatch();

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

        <GooglePlacesAutocomplete 
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            // Push the data into the Redux store
            dispatch(setOrigin({
              // Gives an object with latitude and longitude
              // Stores it in the Redux store
              location: details.geometry.location,
              description: data.description
            }));

            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}  // Removes Powered by Google
          minLength={2}
          query={{  // links to the private API key and does the autocomplete
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        /> 

        <NavOptions /> 
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
  },
});