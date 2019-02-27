// @flow

import { createGlobalStyle } from 'styled-components';
import { MiaowfColors } from 'styles';

export default createGlobalStyle`
  body {
    line-height: 1.5;
    margin: 0;
    font-family: Verdana, Geneva, sans-serif;
    background-color:${MiaowfColors.background}
  }

  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    html, body {
      width: 210mm;
      height: 297mm;
    }
  }
`;
