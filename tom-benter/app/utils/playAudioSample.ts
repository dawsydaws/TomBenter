import * as Tone from "tone";

export const playAudioSample = async (sampleUrl: string) => {
  if (typeof window !== "undefined") {
    try {
      // Ensure AudioContext is resumed in browsers
      if (Tone.getContext().state !== "running") {
        await Tone.start();
      }

      // Create a Tone.Player to play the audio sample
      const player = new Tone.Player(sampleUrl).toDestination();

      // Ensure the sample is loaded before playing
      await Tone.loaded();
      player.start(); // Play the sample
      console.log(`Sample ${sampleUrl} played!`);

      // Return the player instance to allow external control (e.g., stopping)
      return player;
    } catch (error) {
      console.error("Error playing the audio sample:", error);
    }
  }
};