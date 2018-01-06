import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

import {Router,Stack,Scene,Actions} from 'react-native-router-flux';

import firebase from 'react-native-firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhs2knntClbJYgLmd8Y3uq_oOiWfR8WQI",
  authDomain: "fireb-c693f.firebaseapp.com",
  databaseURL: "https://fireb-c693f.firebaseio.com",
  storageBucket: "fireb-c693f.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Listitem extends React.Component {
  render() {

    return (

        <View style={{flex:1}}>

            <View style={{flex:9}}>

                <FlatList
                    data={[
                      {key:'AAAAAA'},
                      {key: 'BBBBBB'},
                      {key: 'CCCCCC'},
                      {key: 'DDDDDD'},
                      {key: 'EEEEEE'},
                      {key: 'FFFFFF'},
                      {key: 'GGGGGG'},
                      {key: 'HHHHHH'},
                      {key: 'IIIIII'},
                      {key: 'JJJJJJ'},
                      {key: 'KKKKKK'},
                      {key: 'LLLLLL'},
                    ]}

                    renderItem={({item}) =>

                        <TouchableOpacity onPress={ () =>{ Actions.itembtn() } } >

                            <View style={styles.container}>

                                <View style={styles.foodtext}>
                                    <Text style={{fontSize:20,color:'black'}}>{item.key}</Text>

                                        <View style={styles.pricetext}>
                                            <Text style={{fontSize:20,color:'black'}}>NTD </Text>
                                            <Text style={{fontSize:20,color:'black'}}> 元</Text>
                                        </View>
                                </View>

                            </View>

                        </TouchableOpacity>}

                        ItemSeparatorComponent={
                          ({highlighted}) => <View style={{ height: 5, backgroundColor: 'white'  }} />
                        }
                />
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:80,
  },

  foodtext: {
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:28,
  },

  pricetext: {
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingRight:5,
  },
})