/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import CodeView from '../../components/Basic/Code';
import DocsLayout from '../../components/Layout/Docs';
import {
  Article, DocH1, DocP, Note, Content, DocH2, FrontIcon, DocASpan, Highlight,
} from '../../components/Extended/Docs';

export default function DocsGettingStarted() {
  const [urlHash, setURLHash] = useState([]);
  const subRefOne = useRef();
  const subRefTwo = useRef();
  const subRefThree = useRef();
  const subRefFour = useRef();

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
    if (urlHash === '#how_it_works') {
      scrollNow(subRefOne);
    } else if (urlHash === '#what_is_token') {
      scrollNow(subRefTwo);
    } else if (urlHash === '#basic_api_call') {
      scrollNow(subRefThree);
    } else if (urlHash === '#explore_payload') {
      scrollNow(subRefFour);
    } else {
      scrollNow();
    }
  }, [urlHash]);

  return (
    <DocsLayout>
      <Article>
        <DocH1>Getting Started</DocH1>
        <Content>
          <DocH2 ref={subRefOne}>How it works</DocH2>
          <DocP>
            We have created an integrated system that generates an API with the array of data that the user passes with the title that the user provides in the title and generates the Payload URL with the title of the Payload in it.
          </DocP>
          <Note>
            <DocP>
              We have some dummy data payload for at
              {' '}
              <Link href="/explore">
                <DocASpan>
                  {process.env.APP_URL}
                  /explore
                </DocASpan>
              </Link>
              . Try it yourself.
            </DocP>
          </Note>
          <DocH2 ref={subRefTwo}>What is Token</DocH2>
          <DocP>
            Simply put, token is an auto generated Hash Key, which needs to be passed to the header of the Payload. We use the tokens as a method of authentication of the Payload.
          </DocP>
          <DocP>
            For each payload there is only one unique token assigned, if the payload is edited or modified, then the token will be changed to another unique one. Tokens can be used to proceed with the authentication for your API testing tool. Here is an example of the view of a dummy Payload we created for reference.
          </DocP>

          <CodeView
            height="auto"
            code={{
              header: {
                Authorization: 'Bearer <PAYLOAD_TOKEN_HERE>',
              },
            }}
          />
          <Note>
            <DocP>
              For
              {' '}
              <Highlight> GET method in public payload</Highlight>
              , header authentication is not required so the Payload will work without token. whereas, for all other methods in both public and private payload header authentication is mandatory, there will be a unique token generated for them.
            </DocP>
          </Note>
          <DocH2 ref={subRefThree}>Basic API Call</DocH2>
          <DocP>
            Go to the list of the existing Payload, pick a payload of your choice and copy the Payload URL, paste it in your API testing tool, then go to the authentication method, add the bearer token(the value of the token)
          </DocP>

          <CodeView
            height="auto"
            code={{
              method: 'POST',
              url: `${process.env.PAYLOAD_URL}<PAYLOAD_URL_HERE>`,
              header: {
                Authorization: 'Bearer <PAYLOAD_TOKEN_HERE>',
              },
              body: {
                id: 10,
                name: 'zack',
                email: 'zack@wantjson.com',
              },
            }}
          />
          <DocH2 ref={subRefFour}>Explore Payload</DocH2>
          <DocP>
            We have provided the option to the users to be able to create both public and private Payload. For the public Payload, it will be available across the platform for all the users. It makes a wide range of already used Payloads by the developers that have been used for their purposes to be available to everyone else.
          </DocP>
          <DocP>
            We also have a wide variety of Verified Public Payloads that the users can use for their purpose. Verified Public Payloads come with a blue tick
            {' '}
            <FrontIcon active>
              <FontAwesomeIcon icon={faCheckCircle} />
            </FrontIcon>
            {' '}
            and are verified by our own Developers.
          </DocP>
          <Note>
            <DocP>
              Payload with
              <FrontIcon active>
                <FontAwesomeIcon icon={faCheckCircle} />
              </FrontIcon>
              {' '}
              are verified public payloads and
              {' '}
              <FrontIcon>
                <FontAwesomeIcon icon={faCheckCircle} />
              </FrontIcon>
              {' '}
              are not verified public payloads.
            </DocP>
          </Note>
        </Content>
      </Article>
    </DocsLayout>
  );
}
