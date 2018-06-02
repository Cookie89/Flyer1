import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import SearchableFlatlist from "searchable-flatlist";

// Replace with Get Flyers from Firebase

// Exlore lets you see

import BookcaseItem from './BookcaseItem';

export default class Flyers extends Component {
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
          latitude: '',
          Category: 'Food',
          SubCategoty: 'Pizza'
        },
        {
          id: 2,
          title: '2 for 1',
          author: 'Vue Cinema',
          thumbnail: 'https://www.vouchercodes.co.uk/static/v10/images/merchant/logo/128px/269.png'
        },
        {
          id: 3,
          title: 'Changes to bin collection',
          author: 'Reading Council',
          thumbnail: 'https://lh3.googleusercontent.com/r2T37mFE0bweUtHjEOah7rew44zt57DRIKdUyHcJs2aXBblzVMw7LQJjqZ-hw07ms0T42jI=s170'
        },
        {
          id: 4,
          title: 'Local Gardener',
          author: 'The Gardening Company',
          thumbnail: 'https://www.createalogoonline.com/wp-content/uploads/2016/06/000638-Online-Logo-Maker-Gardener-Logo-design.jpg'
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

state = { searchTerm: ""};

  render() {
    let { sContainer, sSearchBar, sTextItem } = styles;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={"Search"}
          style={sSearchBar}
          onChangeText={searchTerm => this.setState({ searchTerm })}
          />
        <SearchableFlatlist
          searchProperty={this.state.books.filter(item => item.title.includes(this.state.searchTerm))}
          searchTerm={this.state.searchTerm}
          data={this.state.books}
          containerStyle={{ flex: 1 }}
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
  },
  sContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  sTextItem: {
    height: 50,
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18
  },
  sSearchBar: {
    paddingHorizontal: 10,
    margin: 20,
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 16
  }
});
