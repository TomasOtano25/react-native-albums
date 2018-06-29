import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from '../components/cards/Card';
import CardSection from '../components/cards/CardSection';
import Button from '../components/buttons/Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, handleBuyAlbum } = album;
  const { thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
  return (
      <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image style={styles.thumbnailImageStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={styles.headerContainerStyle}> 
              <Text style={headerTextStyle}>{title}</Text>
              <Text>{artist}</Text>
            </View>
          </CardSection>

          <CardSection>
              <Image style={imageStyle} source={{ uri: image }} />
          </CardSection>

          <CardSection>
              <Button title='Buy' onPress={() => handleBuyAlbum} />
        </CardSection>
      </Card>
  );
};

const styles = {
  headerContainerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailImageStyle: { width: 50, height: 50, borderRadius: 50 },
  thumbnailContainerStyle: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
