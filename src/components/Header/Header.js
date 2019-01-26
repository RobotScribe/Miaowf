// @flow
import * as React from 'react';

import Style from './Header.style';

const Header = () => (
  <Style.Container>
    <Style.Tabs>
      <Style.Tab href="/login">LOGIN</Style.Tab>
    </Style.Tabs>
    <Style.BlackHeader />
  </Style.Container>
);

export default Header;
