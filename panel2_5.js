import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class ListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
  }
  static defaultProps = {
    title: '桌號',
    onPress: () => {},
   }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    padding: 10,
    backgroundColor: '#eee',
  },

})