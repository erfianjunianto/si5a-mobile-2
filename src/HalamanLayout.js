import React from "react";
import {View, Text, StyleSheet} from "react-native";

const HalamanLayout = props => {
  return(
    <View>
      <Text style={{fontSize:50}}> Hello saya {props.nama_depan} {props.nama_belakang}</Text>
    </View>
  );
}

const FlexBasicFix = () => {
    return (
      <View>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'skyblue',
          }}
        />
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'steelblue',
          }}
        />
      </View>
    );
  };
  
  const FlexBasic = () => {
    return (
  
      <View style={{flex: 1}}>
      <View style={{flex: 2, backgroundColor: 'powderblue'}} />
      <View style={{flex: 3, backgroundColor: 'skyblue'}} />
      <View style={{flex: 1, backgroundColor: 'steelblue'}} />
      </View>
    );
  };
  
  const FlexByPercent = () => {
    return (
      <View style={{height: '100%'}}>
        <View
          style={{
            height: '15%',
            backgroundColor: 'powderblue',
          }}
        />
        <View
          style={{
            width: '66%',
            height: '35%',
            backgroundColor: 'skyblue',
          }}
        />
        <View
          style={{
            width: '33%',
            height: '50%',
            backgroundColor: 'steelblue',
          }}
        />
      </View>
    );
  };
  
  const FlexByDirection = () => {
    return (
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'darkorange'}} />
        <View style={{flex: 3, backgroundColor: 'green'}} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default HalamanLayout;