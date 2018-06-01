import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MyFlyers from './screens/MyFlyers';
import Flyers from './screens/Flyers';
import AddBook from './screens/AddBook';
import Lists from './screens/Lists';
import Profile from './screens/Profile';
import EditBook from './screens/EditBook';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
  'MyFlyers': {
    screen: MyFlyers,
    navigationOptions: {
      tabBarLabel: 'My Flyers',
      tabBarIcon: ({ tintColor }) => <Icon name="paper-plane" type="entypo" size={28} color={tintColor} />
    },
  },
  'Flyers': {
    screen: Flyers,
    navigationOptions: {
      tabBarLabel: 'Flyers',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-map-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Add Flyer': {
    screen: AddBook,
    navigationOptions: {
      tabBarLabel: 'Add Flyer',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Lists': {
    screen: Lists,
    navigationOptions: {
      tabBarLabel: 'Lists',
      tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
    },
  },
  'My Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
});

export const BookcaseStack = createStackNavigator({
  MyFlyers: {
    screen: MyFlyers,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  EditBook: {
    screen: EditBook,
    navigationOptions: ({navigation}) => ({
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false
    }),
  },
});

export const CreateRootNavigator = () => {
  return createStackNavigator(
    {
      BookcaseStack: {
        screen: BookcaseStack,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal"
    }
  );
};
