// @flow
import * as React from 'react';
import Header from 'components/Header';

import Style from './PageFrame.style';

type Props = {
  children: React$Node,
};

const PageFrame = (props: Props) => (
  <Style.Container>
    <Header />
    <Style.Content>{props.children}</Style.Content>
  </Style.Container>
);

export default PageFrame;
