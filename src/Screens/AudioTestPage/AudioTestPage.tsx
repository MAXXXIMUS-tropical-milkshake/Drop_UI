import TrackPlayer, {Track} from 'react-native-track-player';
import { StyleSheet } from 'react-native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const track = {
  url: 'http://0.0.0.0:8080/v1/audio/1',
};

function AudioTestPage(): React.JSX.Element {
  const handlePlay = async (item : Track) => {
    console.log(item);
    await TrackPlayer.add(item);
    await TrackPlayer.play();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handlePlay(track)}>
        <Text>Кнопка</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
});

export default AudioTestPage;
