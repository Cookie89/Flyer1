import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import SearchableFlatlist from "searchable-flatlist";

export default class SearhBar extends Component {
  state = { searchTerm: "" };
  render() {
    let { sContainer, sSearchBar, sTextItem } = styles;
    return (
      <View style={sContainer}>
        <TextInput
          placeholder={"Search"}
          style={sSearchBar}
          onChangeText={searchTerm => this.setState({ searchTerm })}
        />
        <SearchableFlatlist
          searchProperty={this.props.books.title}
          searchTerm={this.state.searchTerm}
          data={this.books}
          containerStyle={{ flex: 1 }}
          renderItem={({ item }) => <Text style={sTextItem}>{this.props.books.item.title}</Text>}
          keyExtractor={item => this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    margin: 10,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 18
  }
});
