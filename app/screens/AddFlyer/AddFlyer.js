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

// ToRefactor -- Create Service to handle db events
import { db } from 'Flyer/app/config/firebase.app';

export default class AddItem extends Component {
  constructor(props) {
      super(props);
      this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    }

    handleSubmit(event) {

      event.preventDefault();

      	   console.log("Email--",this.refs.email.value.trim());
      	   console.log("Issue Type--",this.refs.issueType.value.trim());
      	   console.log("Department--",this.refs.department.value.trim());
      	   console.log("Comments--",this.refs.comment.value.trim());

      	   //React form data object
      		var item = {
      		   date: Date(),
      		   email:this.refs.email.value.trim(),
      		   issueType:this.refs.issueType.value.trim(),
      		   department:this.refs.department.value.trim(),
      		   comments:this.refs.comment.value.trim()
      		}

    db.ref().child('items').push(data);
    db.ref().on('child_added', function(snapshot) {
     var data = snapshot.val();
      snapshot.forEach(function(childSnap) {
      console.log(childSnap.val());
      this.refs.form.reset();
      console.log("Flyer submitted successfully");
  });
 });
}

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Flyer</Text>
        <TextInput
              input type="text"
              name="description"
              style={styles.itemInput}
              placeholder = "Description"
            />
          <TextInput
                input type="text"
                name="title"
                style={styles.itemInput}
                placeholder = "Title"
              />
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmitEvent}
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
