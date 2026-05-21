import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' :'#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;

  @media (max-width: 600px) {
    flex: 1;
    padding: 6px 8px;
    margin: 0;
    font-size: 0.6rem;
    border-radius: 8px;
    border-width: 2px;
    min-height: unset;
    white-space: nowrap;
    overflow: hidden;
  }
`;
