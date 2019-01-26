// @flow
import styled from 'styled-components';

import { MiaowfColors, BLACK_HEADER_HEIGHT, TABS_HEIGHT } from 'styles';

export default {
  Container: styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 100%;
    top: 0;
  `,
  Tabs: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${MiaowfColors.white};
    color: ${MiaowfColors.black};
    height: ${TABS_HEIGHT}px;
    padding-right: 20px;
  `,
  Tab: styled.a`
    text-decoration: none;
    color: ${MiaowfColors.black};

    :hover {
      border-bottom: 1px solid;
    }
  `,
  BlackHeader: styled.div`
    background-color: ${MiaowfColors.black};
    height: 100px;
    height: ${BLACK_HEADER_HEIGHT}px;
  `,
};
