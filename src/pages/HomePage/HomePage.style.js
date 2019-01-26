// @flow
import styled from 'styled-components';

import { MiaowfColors } from 'styles';

export default {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
  `,

  TitleContainer: styled.div`
    margin-bottom: 40px;
  `,

  Title: styled.div`
    font-size: 50px;
    color: ${({ textColor }) => textColor};
    text-align: center;
    line-height: 60px;
  `,

  Text: styled.div`
    color: ${MiaowfColors.white};
    text-align: center;
  `,

  Button: styled.button`
    outline: none;
    margin: 30px 0;
    color: ${MiaowfColors.black};
    padding: 10px 20px;
    font-size: 20px;
    background-color: ${MiaowfColors.orange};
    border: none;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      box-shadow: 0 0 10px ${MiaowfColors.white};
    }
  `
};
