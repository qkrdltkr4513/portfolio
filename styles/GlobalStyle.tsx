import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const styles = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');

  ${emotionReset}

  button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  input {
    margin: 0;
  }

  html * {
    font-family: Pretendard Variable !important;
    box-sizing: border-box;
  }

  body {
    background-color: rgb(248, 249, 250);
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .scrollbar-thumb {
    background-color: #bfbfbf !important;
    border-radius: 0px !important;
  }

  .scrollbar-track {
    background-color: transparent !important;
  }

  .scrollbar-track-y {
    width: 4px !important;
  }
`;

export const GlobalStyles = () => <Global styles={styles} />;
