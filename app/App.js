/**
 * Flyer Development
 * https://github.com/
 * @flow
 */

import React, { Component } from 'react';
import { YellowBox, View } from 'react-native';
import firebase from 'firebase';
import { Tabs } from './router';
import LoginForm from './screens/Login/LoginForm';
import Spinner from './components/Spinner';

// REMOVE This is to hide Warnings during development
YellowBox.ignoreWarnings(
  [
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
    'Remote debugger is in a background',
    'Warning: Failed prop type',
    'Warning: Failed child context type'
  ]);

type Props = {};
export default class App extends Component<Props> {
  state = { loggedIn: null }

componentWillMount() {
  firebase.initializeApp({
        apiKey: 'AIzaSyAgXAB_2wc5beE_cElHktaAP1kfVgpBViA',
        authDomain: 'flyer-c44ba.firebaseapp.com',
        databaseURL: 'https://flyer-c44ba.firebaseio.com',
        projectId: 'flyer-c44ba',
        storageBucket: 'flyer-c44ba.appspot.com',
        messagingSenderId: '452858331704'
  });

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
     switch (this.state.loggedIn) {
       case true:
         return <Tabs />;
       case false:
         return <LoginForm />;
       default:
         return <Spinner size="large" />;
     }
   }

  render() {
    return (
        <View style={styles.appContainer}>
          {this.renderContent()}
        </View>
    );
  }
}

const styles = {
  appContainer: {
    flex: 1,
    paddingTop: 10
  }
};
