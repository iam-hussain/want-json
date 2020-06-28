/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import DocsLayout from '../../components/Layout/Docs';
import {
  Article, DocH1, DocH2, DocP, Content, Note,
} from '../../components/Extended/Docs';

export default function DocsIntroduction() {
  const [urlHash, setURLHash] = useState([]);
  const subRefOne = useRef();

  useEffect(() => {
    setURLHash(window.location.hash);
  }, [process.browser && window.location.hash]);

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
    if (urlHash === '#why_wantjson') {
      scrollNow(subRefOne);
    } else {
      scrollNow();
    }
  }, [urlHash]);

  return (
    <DocsLayout>
      <Article>
        <DocH1>Introduction</DocH1>
        <DocP>
          With wantJSON, we let you create a custom REST API, in the simplest way there is, that could be used for development, integration and testing. We address the REST API that we are going to create as Payload. So for all your practical and impractical needs, just sign up today and create a payload of your own.
        </DocP>
        <Content>
          <DocH2 ref={subRefOne}>Why wantJSON?</DocH2>
          <DocP>
            A software developer comes across numerous situations where he needs dummy data, dummy response or entire dummy API for any practical or impractical situation and being developers ourselves we understand how difficult and time taking it could be at times to write an API, fetch the data, send the response and for even small small purposes.
          </DocP>
          <DocP>
            Also at times a developer might need to manipulate some data directly through the front end, without wanting to go into the backend and write an API. So we bring here wantJSON Payload to your service to save your time and effort by bringing a one stop destination that allows you to
            {' '}
            <Link href="/dashboard/payload/create">create custom REST APIs</Link>
            {' '}
            and creating them is easy as pie.
          </DocP>
          <Note>
            <DocP>Rest API created in wantJSON are called as &quot;Payload&quot;.</DocP>
          </Note>
        </Content>
      </Article>
    </DocsLayout>
  );
}
