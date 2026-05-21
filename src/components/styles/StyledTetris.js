import styled from 'styled-components';

import bgImage from '../../img/bg.png'

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
  touch-action: none;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 5px 0 0;
    width: 100%;

    aside {
      width: 90vw;
      max-width: 90vw;
      padding: 8px 0 0;

      > div {
        display: flex;
        gap: 6px;
        width: 100%;
      }
    }
  }
`;