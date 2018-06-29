import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
      //console.log('componentWillMount in AlbumList');
      //debugger;
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }))
        .catch(error => error);
  }

  renderAlbums() {
    return this.state.albums.map(album => 
    <AlbumDetail 
      key={album.title} 
      album={album}
    />
    );
  }

  render() {
    return (
        <ScrollView>
          {this.renderAlbums()} 
        </ScrollView>
    );
  }
}

export default AlbumList;
