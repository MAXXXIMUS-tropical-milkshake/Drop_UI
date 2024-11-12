import TrackPlayer, { Track } from "react-native-track-player"
import styles from "./AudioTestPageStyles"
import React from "react"
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native"
import { Platform } from "react-native"
import { useState } from "react"
import TrackForm from "../../Components/TrackForm/TrackForm"

const apiUrl: string =
  Platform.OS == "web"
    ? "http://0.0.0.0:9321/v1/audio"
    : "http://10.0.2.2:9321/v1/audio"

function AudioTestPage(): React.JSX.Element {
  const [playing, setPlaying] = useState(false)
  const [form, setForm] = useState({
    id: "",
  })
  const addTrack = async (id: string = "-1") => {
    const track: Track = {
      url: id == "-1" ? apiUrl : apiUrl + "/" + id + "/stream",
    }
    console.log(track)
    await TrackPlayer.add(track)
  }
  const handlePlay = async () => {
    if (playing) {
      TrackPlayer.pause();
      setPlaying(false);
      return;
    }
    await TrackPlayer.play();
    setPlaying(true);
  }
  const skipTrack = async () => {
    await TrackPlayer.skipToNext();
  }
  return (
    <SafeAreaView style={styles.container}>
      <TrackForm form={form} setForm={setForm} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePlay()}
          >
            <Text>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addTrack(form.id)}
          >
            <Text>Set track</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => skipTrack()}
          >
            <Text>Skip to next track</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default AudioTestPage
