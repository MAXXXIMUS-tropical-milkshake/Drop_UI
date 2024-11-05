import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import TrackPlayer, { AddTrack, Track, Event } from 'react-native-track-player';
import { pullTrack } from '../../Services/StreamPlayer';


function AudioTestPage(): React.JSX.Element {
  const track: AddTrack = {
    url: 'http://0.0.0.0:8080/v1/audio/1',
    title: 'Doradura',
    artist: 'Dora',
    duration: 134,
    contentType: "audio/mpeg",
    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.tjVEMiS5O2yNzclwLdaZ-FuzrhyqOT7UwM9Hfc0ZQ8Q",
  };
  const [playing, setPlaying] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        margin: 'auto',
        alignContent: 'center',
        alignSelf: 'center',
        // justifyContent: 'center',
        position: 'static',
        flex: 1, flexDirection: 'column',
        // alignItems: 'center'
      }}>

        <TouchableOpacity style={styles.button} onPress={() => {
          if (playing) {
            TrackPlayer.pause();
            setPlaying(false);
            return;
          }
          TrackPlayer.play();
          setPlaying(true);
        }}>
          <Text>Кнопка</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
          TrackPlayer.skipToNext();
          pullTrack();
        }}>
          <Text>Дальше</Text>
        </TouchableOpacity>

      </View>
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
    margin: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
});

export default AudioTestPage;
