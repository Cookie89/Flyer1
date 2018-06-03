// AddItem.js

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AlertIOS
} from 'react-native';
import { addFlyer } from '../services/FlyerService';

export default class AddItem extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '',
        description: '',
        start: '',
        end: ''
      };
      this.handleTitleChange = this.handleChange.bind(this);
      this.handleDescriptionChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({ [e.target.name]: e.nativeEvent.value });
    }

    handleSubmit(e) {
      addFlyer({ [e.target.name]: e.nativeEvent.value });
      AlertIOS.alert(
        'Item saved successfully'
       );
    }
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Flyer</Text>
        <TextInput
              input type="text"
              name="description"
              style={styles.itemInput}
              onChange={this.handleDescriptionChange}
              placeholder = "Description"
            />
          <TextInput
                input type="text"
                name="title"
                style={styles.itemInput}
                onChange={this.handleTitleChange}
                placeholder = "Title"
              />
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.buttonText}>
                  Add
              </Text>
            </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
