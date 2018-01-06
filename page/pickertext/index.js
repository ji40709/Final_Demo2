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
  TouchableOpacity,
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
  picker:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:0.5,
    color:'gray',
    marginRight:20,
    marginLeft:20,
  },
  button:{
    borderWidth:1,
    borderRadius:40,
    borderColor:'green',
  }
})

export default class Pickertext extends React.Component {
  constructor(props) {
    super(props);
    data=['1號桌','2號桌','3號桌'];
    this.state={
    selected:"1號桌",
    text:""
    }
  }
  handleChangeText=(typedText)=>{
    this.setState({text:typedText});
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
        <View style={{flex:0.4}}>
        <Picker
            style={styles.picker}
            selectedValue={this.state.selected}
            onValueChange={(value)=>this.setState({selected:value})}>
            {this.renderItem()}
        </Picker>
        </View>
        <View style={{flex:0.4,marginLeft:20,marginRight:20}}>
        <Text style={{fontSize:20}}>點餐人數:</Text>
        <TextInput
            style={
                {
                    height: 50
                }
            }
            placeholder="在這裡輸入"
            onChangeText={this.handleChangeText}
            />
         </View>

         <View style={{flex:0.2,marginLeft:40,marginRight:40}}>
         <Button
            onPress={ () =>{ Actions.menu() } }
            title="選擇菜色"
            color='#FFBB66'
            style={styles.button}
         />
         </View>


     </View>
    );
  }
}