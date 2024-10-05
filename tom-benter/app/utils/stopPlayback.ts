import * as Tone from "tone";

export const stopPlayback = (player: Tone.Player | null) => {
  if (player) {
    try {
      player.stop(); // Stop the playback
      console.log("Playback stopped");
    } catch (error) {
      console.error("Error stopping playback:", error);
    }
  } else {
    console.log("No active player to stop.");
  }
};