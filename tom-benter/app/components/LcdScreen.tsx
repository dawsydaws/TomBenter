import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: aliceblue;
  height: 100%;
  padding: 1rem; /* Optional padding for better spacing */
`;

const SongItem = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid black; /* Optional border between songs */
  
  p {
    margin: 0; /* Remove default margins */
  }
`;

function LcdScreen({ selectedSong }: { selectedSong: { id: number; name: string; url: string } }) {
  return (
    <StyledContainer>
      <SongItem><p>{selectedSong.name}</p></SongItem>
    </StyledContainer>
  );
}

export default LcdScreen;