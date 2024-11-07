import { Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import TrackPlayer, { AddTrack, Track, Event } from 'react-native-track-player';
import { apiUrl, pullTrack } from '../../Services/StreamPlayer';
import { unstable_createElement } from 'react-native-web';

const WebAudioPlayer = () => {
  return unstable_createElement('audio', { id: 'audio_player', type: 'audio/mpeg' });
};

type WebTrackPlayerType = {
  bitQueue: number[],
  songLoaded: boolean,
  songPlaying: boolean,
};

function initWebTrackPlayer(): WebTrackPlayerType {
  const q: number[] = [1,2,3];
  // for (let i = 0; i < 3; i++) fetch(apiUrl).then(response => {
  //   let data = response.json();
  //   q.push(data.id as number);
  // });
  return { bitQueue: q, songLoaded: false, songPlaying: false };
}
const WebTrackPlayer = initWebTrackPlayer();

function WebPlayPause() {
  console.log(WebTrackPlayer.songPlaying);
  const audioPlayer = document.getElementById('audio_player');
  if (WebTrackPlayer.songPlaying) {
    audioPlayer!.pause();
    WebTrackPlayer.songPlaying = false;
    console.log(WebTrackPlayer.songPlaying);
    return;
  }
  if (!WebTrackPlayer.songLoaded) {
    console.log("loading");
    const url = apiUrl + '/' + WebTrackPlayer.bitQueue[0];
    audioPlayer!.src = url;
    audioPlayer!.load();
    WebTrackPlayer.songLoaded = true;
    audioPlayer!.play().catch(error => {
      console.error("Error playing audio:", error);
      alert("Could not play audio. Please check the URL.");
    });
  } else {
    console.log("resuming");
    audioPlayer!.play();
  }
  WebTrackPlayer.songPlaying = true;
  console.log(WebTrackPlayer.songPlaying);
}
function WebNextSong() {
  WebTrackPlayer.bitQueue = WebTrackPlayer.bitQueue.slice(1, -1);
  console.log(WebTrackPlayer.bitQueue);
  WebPlayPause();
  WebTrackPlayer.songLoaded = false;  
}

function AudioTestPage(): React.JSX.Element {
  const [playing, setPlaying] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        margin: 'auto',
        alignContent: 'center',
        alignSelf: 'center',
        position: 'static',
        flex: 1,
        flexDirection: 'column',
      }}>
        {Platform.OS == "web" ? <WebAudioPlayer /> : null}
        <TouchableOpacity style={styles.button} onPress={() => {
          if (Platform.OS == 'web') { WebPlayPause() } else {
            if (playing) {
              TrackPlayer.pause();
              setPlaying(false);
              return;
            }
            TrackPlayer.play();
            setPlaying(true);
          }
        }}>
          <Text>Кнопка</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
          if (Platform.OS == 'web') {
            WebNextSong();
            return;
          }
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
