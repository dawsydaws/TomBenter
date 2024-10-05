import { useState } from "react";
import * as Tone from "tone";
import { playAudioSample } from "../utils/playAudioSample";
import { stopPlayback } from "../utils/stopPlayback";

export const useAudioPlayer = (initialSongUrl?: string) => {
  const [player, setPlayer] = useState<Tone.Player | null>(null);

  const play = async (songUrl: string) => {
    if (songUrl) {
      const newPlayer = await playAudioSample(songUrl);
      if (newPlayer) {
        setPlayer(newPlayer); // Only set player if it's not null
      }
    }
  };

  const stop = () => {
    stopPlayback(player); // Stop the playback using the player instance
  };

  return {
    play,
    stop,
  };
};