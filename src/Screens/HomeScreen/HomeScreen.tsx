import React from 'react';
import { View } from 'react-native';
import { data } from '../../Data/tracks';
import BeatCard from '../../Components/BeatCard/BeatCard';

function HomeScreen(): React.JSX.Element {
  return (
    <BeatCard data={data[0]}/>
  );
}

export default HomeScreen;
