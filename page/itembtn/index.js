import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Picker,
  Item,
  TextInput,
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    padding: 10,
    backgroundColor: '#eee',
  },
  content_title_text:{
        fontSize:20,
        color:'black',
        paddingLeft:3,
        paddingTop:4,
  },
  content_comment:{
    backgroundColor:'gray'
  },
  item:{
    paddingTop:4,
    backgroundColor:'#D3D3D3',
    flex:0.3,
  },
  picker:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    color:'#444444',
  },
  button:{
      borderWidth:1,
      borderRadius:40,
      borderColor:'green',
    }
});

export default class Itembtn extends Component {
  constructor(props) {
    super(props);
    data=['1','2','3','4'];
    this.state={
    selected:"1"
    }
  }
  renderItem(){
    items=[];
    for(let item of data){
        items.push(<Picker.Item key={item} label={item} value={item}/>)
    }
    return items;
  }

  render() {
    return (
    <View style={{flex:1}}>
        <View style={styles.item}>
             <Text style={styles.content_title_text}>甜點X</Text>
         </View>
    <View style={{backgroundColor:"white",flex:0.3}}>
        <Text style={styles.content_title_text}>註解:</Text>
    </View>
        <View style={{flex:0.2}}>
            <Text style={{fontSize:20}}>數量:</Text>
            <Picker
                style={styles.picker}
                selectedValue={this.state.selected}
                onValueChange={(value)=>this.setState({selected:value})}>
                {this.renderItem()}
            </Picker>
         </View>
        <View style={{flex:0.1,marginRight:40,marginLeft:40}}>
            <Button
                onPress={ () =>{ Actions.menu() } }
                title="加入並繼續"
                color='#FFCC22'
                style={styles.button}
             />

        </View>
        <View style={{flex:0.1,marginRight:40,marginLeft:40}}>
            <Button
                onPress={ () =>{ Actions.checkout() } }
                title="加入並結帳"
                color='#FF7744'
                style={styles.button}
            />
        </View>
    </View>


    );
  }
}