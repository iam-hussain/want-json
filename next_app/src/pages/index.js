import React from 'react';

import Page from '../components/Page';
import Hero from '../components/Home/Hero';
import Dummy from '../components/Home/Dummy';
import Own from '../components/Home/Own';

export default function Index() {
  return (
    <>
      <Page>
        <Hero />
        <Dummy />
        <Own />
      </Page>
    </>
  );
}
