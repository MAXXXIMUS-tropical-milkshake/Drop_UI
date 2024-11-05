import TrackPlayer, { Track } from "react-native-track-player";

export const setupPlayer = async () => {
    try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.setVolume(0.1);
        await prefetchTracks();
        console.log('Player setup successful');
    } catch (error) {
        console.error('Error setting up player:', error);
    }
};

export const apiUrl = "http://0.0.0.0:8080/v1/audio";

type TracRawResponse = Omit<Response, "json"> & { status: 201, json: () => TrackResponse }
type TrackResponse = {
    id: number,
    artist: string,
    genre: string,
    beatmaker_id: number,
    created_at: string
}

export const pullTrack = async () => {
    await fetch(apiUrl, {
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.tjVEMiS5O2yNzclwLdaZ-FuzrhyqOT7UwM9Hfc0ZQ8Q"
        }
    })
        .then(
            response => {
                if (response.status == 200) return response.json();
                return Error(response.status.toString());
            }).then(async track => await TrackPlayer.add({ url: apiUrl + "/" + track.id }))
        .catch(e => console.log(e));
};

const prefetchTracks = async () => {
    console.log("prefetching");
    let meta: TrackResponse[] = [];
    // await TrackPlayer.getTrack(await TrackPlayer.getActiveTrackIndex());
    for (let i = 0; i < 3; i++) {
        pullTrack();
        console.log("prefetched" + i);
    }
};