/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
import Router from 'next/router';
import DocsLayout from '../../components/Layout/Docs';
import CodeView from '../../components/Basic/Code';
import {
  Article, DocP, Content, DocH1, DocH2, DocH5, Note, Highlight, DocH3,
} from '../../components/Extended/Docs';
import { HeroColWrapper, BoxRow } from '../../components/Extended/Home';

export default function DocsStaticPayload() {
  const [urlHash, setURLHash] = useState([]);
  const subRefOne = useRef();
  const subRefTwo = useRef();

  const staticPayload = {
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  };

  useEffect(() => {
    setURLHash(window.location.hash);
  }, [process.browser]);

  const handleRouteChange = () => {
    if (process.browser) {
      if (window.location.hash) {
        setURLHash(window.location.hash);
      } else {
        setURLHash('');
      }
    }
  };

  useEffect(() => {
    Router.events.on('hashChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, []);

  const scrollNow = (element = undefined) => {
    const page = document.getElementById('pageMaker');
    if (element) {
      page.scrollTo({
        behavior: 'smooth',
        top: (element.current.offsetTop - 50),
      });
    } else {
      page.scrollTo({
        behavior: 'smooth',
        top: (0),
      });
    }
  };

  useEffect(() => {
    if (urlHash === '#what_is_static_payload') {
      scrollNow(subRefOne);
    } else if (urlHash === '#api_call_example_static') {
      scrollNow(subRefTwo);
    } else {
      scrollNow();
    }
  }, [urlHash]);

  return (
    <DocsLayout>
      <Article>
        <DocH1>Static Payload</DocH1>
        <Content>
          <DocH2 ref={subRefOne}>What is static payload</DocH2>
          <DocP>
            This is the simplest Payload that the user can use to simply fetch the data in simple form to fetch the complete object in one go.
          </DocP>
          <Content>
            <DocH3>How it works</DocH3>
            <DocP>
              For a static payload, the data is stored in a JSON object and is manipulated based on user requirement and the static payload is returned with a url that has the provided title in it.
            </DocP>
            <DocH3>Why static payload</DocH3>
            <DocP>
              There are certain instances where the user needs to simply fetch the data in an API where the user does not need to perform any particular operation than to just fetch the data through an API. For scenarios as such the user can use our Static Payload.
            </DocP>
          </Content>
          <DocH2 ref={subRefTwo}>API Call Example</DocH2>
          <DocP>
            A simple static payload created with the below data
          </DocP>
          <CodeView
            code={staticPayload}
          />
          <DocH5>Example API</DocH5>
          <DocP>
            Static payload has &quot;GET&quot; method API to get the input as return, Below example represent the following &quot;GET&quot; method
          </DocP>
          <BoxRow padding="28px 0px 0px">
            <HeroColWrapper margin="0px 0px 28px" className="col-md-6">
              <DocH5 font="Rajdhani">Request</DocH5>
              <CodeView
                margin="0px"
                code={{
                  method: 'GET',
                  url: `${process.env.PAYLOAD_URL}<PAYLOAD_URL_HERE>`,
                  header: {
                    Authorization: 'Bearer <PAYLOAD_TOKEN_HERE>',
                  },
                  body: {},
                }}
              />
            </HeroColWrapper>
            <HeroColWrapper margin="0px 0px 28px" className="col-md-6">
              <DocH5 font="Rajdhani">Response</DocH5>
              <CodeView
                margin="0px"
                code={{
                  success: true,
                  status: 200,
                  message: 'Accepted',
                  payload: staticPayload,
                }}
              />
            </HeroColWrapper>
          </BoxRow>
          <Note>
            <DocP>
              For
              {' '}
              <Highlight> GET method in public payload</Highlight>
              , header authentication is not required so the Payload will work without token. whereas, for all other methods in both public and private payload header authentication is mandatory, there will be a unique token generated for them.
            </DocP>
          </Note>
        </Content>
      </Article>
    </DocsLayout>
  );
}
