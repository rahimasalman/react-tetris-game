import styled from 'styled-components';

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: #fff;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 10px;
    margin: 6px 0 0;
    border-radius: 8px;
    font-size: 0.75rem;
  }
`
