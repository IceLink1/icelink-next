import React from "react";
import styled from "styled-components";

const Pulse = () => {
  return (
    <StyledWrapper>
      <div className="pulse-animation">
        <svg width="64px" height="48px">
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="back"
          />
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="front"
          />
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .pulse-animation svg polyline {
    fill: none;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .pulse-animation svg polyline#back {
    fill: none;
    stroke: #ff4d5033;
  }

  .pulse-animation svg polyline#front {
    fill: none;
    stroke: #ff4d4f;
    stroke-dasharray: 48, 144;
    stroke-dashoffset: 192;
    animation: pulse_animation 1.4s linear infinite;
  }

  @keyframes pulse_animation {
    72.5% {
      opacity: 0;
    }

    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default Pulse; 