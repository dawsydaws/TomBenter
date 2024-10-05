import { useState } from "react";

type Song = {
  id: number;
  name: string;
  url: string;
};

export const useTrackSelector = (initialSongs: Song[]) => {
  const [songs, setSongs] = useState(initialSongs);

  // Ensure the selectedSong is always the first song in the list if no song is selected
  const [selectedSong, setSelectedSong] = useState<Song>(initialSongs[0]);

  const selectSong = (song: Song) => {
    setSelectedSong(song);
  };

  return {
    songs,
    setSongs,
    selectedSong,
    selectSong,
  };
};