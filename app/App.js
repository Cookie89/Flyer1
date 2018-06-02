/**
 * Flyer Development
 * https://github.com/
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import * as firebase from 'firebase';

import { Tabs } from './router';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAgXAB_2wc5beE_cElHktaAP1kfVgpBViA",
    authDomain: "flyer-c44ba.firebaseapp.com",
    databaseURL: "https://flyer-c44ba.firebaseio.com",
    projectId: "flyer-c44ba",
    storageBucket: "flyer-c44ba.appspot.com",
    messagingSenderId: "452858331704"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Tabs />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
