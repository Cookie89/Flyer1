import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

// Replace with Get Flyers from Firebase

import BookcaseItem from './BookcaseItem';

export default class Boookcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'Deal of the day',
          author: 'Dominos',
          thumbnail: 'https://cdn6.aptoide.com/imgs/0/7/3/07370c85eea94c8d505b68e1565f2899_icon.png?w=136',
          longitude: '',
          latitude: ''
        },
        {
          id: 2,
          title: 'The Hobbit',
          author: 'J. R. R. Tolkien',
          thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
        },
        {
          id: 3,
          title: '1984',
          author: 'George Orwell',
          thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
        }
      ]
    }
  }

  _renderItem = ({item}) => (
    <BookcaseItem
      id={item.id}
      title={item.title}
      author={item.author}
      thumbnail={item.thumbnail}
    />
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.books}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
