import React from "react";
import styled from "styled-components";
import TransportButton from "./TransportButton";
import { useAudioPlayer } from "../hooks/useAudioPlayer";

const StyledWrapper = styled.div`
  padding-left: 4rem;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;
`;

function ControlPanel({
  selectedSong,
}: {
  selectedSong: { id: number; name: string; url: string };
}) {
  const { play, stop } = useAudioPlayer();

  return (
    <StyledWrapper>
      <StyledContainer>
        <TransportButton label="Play" feedbackLight onClick={() => play(selectedSong.url)} />
        <TransportButton label="Stop" onClick={stop} />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default ControlPanel;