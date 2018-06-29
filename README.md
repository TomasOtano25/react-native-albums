react-native run-android
> Doble r para actualizar
>Ctrl + m para abrir el menu de depuracion 

## Extensions

 npm install -D eslint-config-rallycoding
 npm i -g eslint
 yarn add axios

 ## Tags

 - Text
 - View
 - ScrollView
 - Linking // me permite interactual con las demas aplicacion (navegador)
 - Image
 ```js
 <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: album.thumbnail_image }} />

 // Truco de imagenes de ocupen el espacio de su contendor
 imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
 ```
 -Button
 ```js
<Button title={text} onPress={} />
 ```


 ## Components

 - Header
 - CardSection
 // AlbumList
 // AlbumDetail
 - Car

 justifyContent='flex-end' // vertical
 justifyContent='center' // vertical
 justifyContent='flex-start' // vertical
 justifyContent='space-between' // vertical
 justifyContent='space-around' // vertical
 alignItems='flex-start' //horizantal
 alignItems='center' //horizantal
 alignItems='flex-end' //horizantal
 flexDirection='row'
 alignSelf: 'stretch' // estira el elemento
flex: 1 // el elemento ocupa todo el ancho

shadowColor={}
shadowOffSet={} //altura y ancho de la sombra

elevation: 2

https://rallycoding.herokuapp.com/api/music_albums // link de api


this.setState({});

borderWidth

## Touchable

-TouchableHighlight
> Cambia de color
-TouchableOpacity
> Se oculta
