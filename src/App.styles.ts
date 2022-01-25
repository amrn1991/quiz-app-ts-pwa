import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
  }
  html{
    height: 100%;
  }
  body{
    background: url("scenery.webp");
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #109648;
    margin: 0;
    font-size: 2rem;
  }
  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold',
      sans-serif;
    background-clip: text;
    filter: drop-shadow(2px 2px #ec9f05);
    color: #01295f;
    font-size: 70px;
    margin: 20px;
    text-align: center;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
