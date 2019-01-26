// @flow
import * as React from 'react';

import PageFrame from 'components/PageFrame';

import { MiaowfColors } from 'styles';

import Style from './HomePage.style';

type propsType = {
  redirectToSignIn: () => void
};

const HomePage = (props: propsType) => (
  <PageFrame>
    <Style.Container>
      <Style.TitleContainer>
        <Style.Title textColor={MiaowfColors.white}>
          The only website that a
        </Style.Title>
        <Style.Title textColor={MiaowfColors.orange}>
          Pet Owner will ever need.
        </Style.Title>
      </Style.TitleContainer>
      <Style.Text>It takes 1 minute to configure!</Style.Text>
      <Style.Button onClick={props.redirectToSignIn}>START NOW >></Style.Button>
      <Style.Text>
        Get a fully personalized website for you and all your pets’ needs.{' '}
      </Style.Text>
      <Style.Text>
        Being a pet owner will never be the same again. Just give it a try!
      </Style.Text>
    </Style.Container>
  </PageFrame>
);

export default HomePage;
