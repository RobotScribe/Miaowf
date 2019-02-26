// @flow
import styled from 'styled-components';
import { MiaowfColors } from 'styles';

export default {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Form: styled.form`
    width: 500px;
  `,
  Input: styled.input`
    width: 100%;
  `,
  Submit: styled.button`
    width: 30%;
  `,
  Error: styled.div`
    color: ${MiaowfColors.red};
  `,
};
