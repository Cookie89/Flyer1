import React, { Component } from 'react';
import { ScrollView } from 'react-native';

//Firebase
import SearchableFlatlist from "searchable-flatlist";

import FlyerDetail from './FlyerDetail';

//HTTPS Request Library
import axios from 'axios';


export default class Flyers extends Component {

  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <FlyerDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
