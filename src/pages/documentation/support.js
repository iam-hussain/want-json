/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import DocsLayout from '../../components/Layout/Docs';
import {
  Article, DocP, DocH1, Highlight, DocASpan,
} from '../../components/Extended/Docs';

export default function DocsSupport() {
  const [urlHash, setURLHash] = useState([]);
  const subRefOne = useRef();
  const subRefTwo = useRef();

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
    if (urlHash === '#static_payload') {
      scrollNow(subRefOne);
    } else if (urlHash === '#dynamic_payload') {
      scrollNow(subRefTwo);
    } else {
      scrollNow();
    }
  }, [urlHash]);

  return (
    <DocsLayout>
      <Article>
        <DocH1 ref={subRefOne}>Did we miss something?</DocH1>
        <DocP>
          For any other assistance regarding the payloads or if you have any other questions, please write to us at
          {' '}
          <Highlight>{process.env.CONTACT_EMAIL}</Highlight>
          {' '}
          and we will get back to you in no time or if you want us to get in touch with you, submit your queries/feedback in our
          {' '}
          <Link href="/contact_us"><DocASpan>Contact Us page</DocASpan></Link>
          .
        </DocP>
      </Article>
      <Article>
        <DocH1 ref={subRefTwo}>Partner with us?</DocH1>
        <DocP>
          We are open for partnerships at the moment. Please contact us if you want to expand your business with our help. We will be more than happy to shake hands(or a Namaste, maybe!).
        </DocP>
      </Article>
    </DocsLayout>
  );
}
