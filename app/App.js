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

import { firebase } from './config/firebase.app.js'

// REMOVE this is to hide Warnings during development
import { YellowBox } from 'react-native';

import { Tabs } from './router';

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
