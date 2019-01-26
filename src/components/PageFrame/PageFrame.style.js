// @flow
import styled from 'styled-components';

import { BLACK_HEADER_HEIGHT, TABS_HEIGHT } from 'styles';

export default {
  Container: styled.div`
    width: 100%;
  `,

  Content: styled.div`
    position: relative;
    top: ${BLACK_HEADER_HEIGHT + TABS_HEIGHT}px;
  `,
};
