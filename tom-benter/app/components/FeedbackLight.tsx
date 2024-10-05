import React from 'react'
import styled from 'styled-components'

const StyledFeedbackLight = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  background-color: black;
  border-radius: 50%;
`;

function FeedbackLight() {
  return (
    <StyledFeedbackLight/>
  )
}

export default FeedbackLight