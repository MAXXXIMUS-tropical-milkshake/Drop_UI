import TrackPlayer, {Track} from 'react-native-track-player';
import { StyleSheet } from 'react-native';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

function AudioTestPage(): React.JSX.Element {
  const track = {
    url: 'http://192.168.0.105:9090/v1/audio/1/stream',
    title: 'Doradura',
    artist: 'Dora',
    duration: 134,
  };
  const handlePlay = async (item) => {
    console.log(item);
    await TrackPlayer.add(item);
    await TrackPlayer.play();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handlePlay(track)}>
        <Text>Кнопка</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
});

export default AudioTestPage;
