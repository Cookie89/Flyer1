import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert
} from 'react-native';
import firebase from 'firebase';
import Button from '../components/Button';

export default class Profile extends Component {
  _onPressButton() {
    Alert.alert('Placeholder for save call')
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.sTextInput} placeholder='First Name' />
        <TextInput style={styles.sTextInput} placeholder='Last Name' />
        <TextInput style={styles.sTextInput} placeholder='Email Address' />
        <TextInput style={styles.sTextInput} placeholder='Phone Number' />
        <TextInput style={styles.sTextInput} placeholder='Location' />
        <TextInput style={styles.sTextInput} placeholder='Membership' />
        <Button style={styles.sButton}
          onPress={this._onPressButton}
          title="Save"
        />
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  sTextInput: {
    flexDirection: 'column',
    borderBottomWidth: 2,
    alignItems: 'flex-start',
    textAlignVertical: "center",
    margin: 30
  },
  sButton: {
    margin: 20
  }
});
