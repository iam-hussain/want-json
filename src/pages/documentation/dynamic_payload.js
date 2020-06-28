/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
import Router from 'next/router';
import DocsLayout from '../../components/Layout/Docs';
import CodeView from '../../components/Basic/Code';
import {
  Article, DocP, Content, DocH1, DocH2, DocH5, Note, Highlight, DocH3,
} from '../../components/Extended/Docs';
import {
  HeroColWrapper, BoxRow, Methods, MethodButton,
} from '../../components/Extended/Home';

export default function DocsDynamicPayload() {
  const [urlHash, setURLHash] = useState([]);
  const subRefOne = useRef();
  const subRefTwo = useRef();

  const dynamicPayload = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
  }];

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
    if (urlHash === '#what_is_dynamic_payload') {
      scrollNow(subRefOne);
    } else if (urlHash === '#api_call_example_dynamic') {
      scrollNow(subRefTwo);
    } else {
      scrollNow();
    }
  }, [urlHash]);

  const reqIs = {
    method: 'GET',
    url: `${process.env.PAYLOAD_URL}<PAYLOAD_URL_HERE>`,
    header: {
      Authorization: 'Bearer <PAYLOAD_TOKEN_HERE>',
    },
    body: {},
  };


  const resIs = {
    success: true,
    status: 200,
    message: 'Accepted',
    payload: dynamicPayload,
  };
  const bodyData = {
    update: {
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    create: {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
  };

  const [currentCall, setCurrentCall] = useState(2);
  const [reqPayload, setReqPayload] = useState({ ...reqIs });
  const [resPayload, setResPayload] = useState(resIs);

  const handleMethod = (_call) => {
    setCurrentCall(_call);
    if (_call === 3) {
      setReqPayload({ ...reqIs, params: { ...reqIs.params, id: 3 }, url: `${reqIs.url}/:id` });
      setResPayload({ ...resIs, payload: dynamicPayload.find((p) => p.id === 3) });
    } else if (_call === 4) {
      setReqPayload({
        ...reqIs, body: bodyData.create, method: 'POST',
      });
      setResPayload({ ...resIs, payload: [...dynamicPayload, bodyData.create] });
    } else if (_call === 5) {
      setReqPayload({
        ...reqIs, body: bodyData.update, params: { ...reqIs.params, id: 4 }, method: 'PUT', url: `${reqIs.url}/:id`,
      });
      setResPayload({ ...resIs, payload: [...dynamicPayload.map((p) => (p.id === 4 ? { ...p, ...bodyData.update } : p))] });
    } else if (_call === 6) {
      setReqPayload({
        ...reqIs, method: 'DELETE', params: { ...reqIs.params, id: 2 }, url: `${reqIs.url}/:id`,
      });
      setResPayload({ ...resIs, payload: dynamicPayload.filter((p) => p.id !== 2) });
    } else {
      setReqPayload({ ...reqIs });
      setResPayload({ ...resIs, payload: dynamicPayload });
    }
  };

  return (
    <DocsLayout>
      <Article>
        <DocH1>Dynamic Payload</DocH1>
        <Content>
          <DocH2 ref={subRefOne}>What is dynamic payload</DocH2>
          <DocP>
            Dynamic Payload is the one where the user can not just create the Payload but can also perform operations such as CRUD(Create, Read, Update and Delete) on your array of JSON Objects. When creating a Dynamic Payload each of the arrays of the JSON object has its own id(auto generated if the user does not provide). For a static Payload, the user can pass either a single JSON object or an array of JSON Objects, whereas for a dynamic Payload, it always has to be an array of JSON objects.
          </DocP>
          <Content>
            <DocH3>How it works</DocH3>
            <DocP>
              For a dynamic payload, the data is stored in an array of JSON objects and is manipulated based on user requirement and the dynamic payload is returned with a url that has the provided title in it.
            </DocP>
            <DocH3>Why dynamic payload</DocH3>
            <DocP>
              Dynamic Payload provides us the abilities to perform the data manipulation based on the requirement such as the CRUD(Create, Read, Update and Delete) operations. While using dynamic payload, the scope of usage of payload is not restricted to just fetch the data.
            </DocP>
          </Content>
          <DocH2 ref={subRefTwo}>API Call Example</DocH2>
          <DocP>
            A dynamic payload created with the below array of object
          </DocP>
          <CodeView
            code={dynamicPayload}
          />
          <DocH5>Example API</DocH5>
          <DocP>
            Dynamic payload has &quot;GET, POST, PUT and DELETE&quot; method API to execute CRUD operation with the input, Below example represent the following method&apos;s
          </DocP>
          <Methods>
            <MethodButton onClick={() => handleMethod(2)} active={currentCall === 2}>Read</MethodButton>
            <MethodButton onClick={() => handleMethod(3)} active={currentCall === 3}>Read One</MethodButton>
            <MethodButton onClick={() => handleMethod(4)} active={currentCall === 4}>Create</MethodButton>
            <MethodButton onClick={() => handleMethod(5)} active={currentCall === 5}>Update</MethodButton>
            <MethodButton onClick={() => handleMethod(6)} active={currentCall === 6}>Delete</MethodButton>
          </Methods>
          <BoxRow padding="28px 0px 0px">
            <HeroColWrapper margin="0px 0px 28px" className="col-md-6">
              <DocH5 font="Rajdhani">Request</DocH5>
              <CodeView
                margin="0px"
                code={reqPayload}
              />
            </HeroColWrapper>
            <HeroColWrapper margin="0px 0px 28px" className="col-md-6">
              <DocH5 font="Rajdhani">Response</DocH5>
              <CodeView
                margin="0px"
                code={resPayload}
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
