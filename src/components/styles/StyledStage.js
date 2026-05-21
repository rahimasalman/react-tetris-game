import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 25vw;
  background: #111;

  @media (max-width: 900px) and (min-width: 601px) {
    width: 40vw;
    grid-template-rows: repeat(
      ${props => props.height},
      calc(40vw / ${props => props.width})
    );
  }

  @media (max-width: 600px) {
    /* cell = min of 8vw or (available height ÷ 20 rows) so stage always fits screen */
    --cell: min(8vw, calc((100vh - 155px) / ${props => props.height}));
    width: calc(var(--cell) * ${props => props.width});
    grid-template-rows: repeat(${props => props.height}, var(--cell));
    grid-template-columns: repeat(${props => props.width}, var(--cell));
  }
`;
