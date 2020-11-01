/* eslint-disable camelcase */
/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import DocsLayout from '../components/Layout/Docs';
import CodeView from '../components/Basic/Code';
import {
  Article, DocH1, DocH2, DocH3, DocH5, DocP, Content, Note, FrontIcon, DocASpan, Highlight,
} from '../components/Extended/Docs';
import {
  HeroColWrapper, BoxRow, Methods, MethodButton,
} from '../components/Extended/Home';

export default function Docs() {
  const [urlHash, setURLHash] = useState([]);
  const why_wantjson = useRef();
  const how_it_works = useRef();
  const what_is_token = useRef();
  const basic_api_call = useRef();
  const explore_payload = useRef();
  const static_payload = useRef();
  const dynamic_payload = useRef();
  const what_is_static_payload = useRef();
  const api_call_example_static = useRef();
  const what_is_dynamic_payload = useRef();
  const api_call_example_dynamic = useRef();
  const did_we_miss_something = useRef();
  const partner_with_us = useRef();

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
      scrollNow(why_wantjson);
    } else if (urlHash === '#how_it_works') {
      scrollNow(how_it_works);
    } else if (urlHash === '#what_is_token') {
      scrollNow(what_is_token);
    } else if (urlHash === '#basic_api_call') {
      scrollNow(basic_api_call);
    } else if (urlHash === '#explore_payload') {
      scrollNow(explore_payload);
    } else if (urlHash === '#static_payload') {
      scrollNow(static_payload);
    } else if (urlHash === '#dynamic_payload') {
      scrollNow(dynamic_payload);
    } else if (urlHash === '#what_is_static_payload') {
      scrollNow(what_is_static_payload);
    } else if (urlHash === '#api_call_example_static') {
      scrollNow(api_call_example_static);
    } else if (urlHash === '#what_is_dynamic_payload') {
      scrollNow(what_is_dynamic_payload);
    } else if (urlHash === '#api_call_example_dynamic') {
      scrollNow(api_call_example_dynamic);
    } else if (urlHash === '#did_we_miss_something') {
      scrollNow(did_we_miss_something);
    } else if (urlHash === '#partner_with_us') {
      scrollNow(partner_with_us);
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
          <DocH2 ref={why_wantjson}>Why wantJSON?</DocH2>
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
      <Article>
        <DocH1>Getting Started</DocH1>
        <Content>
          <DocH2 ref={how_it_works}>How it works</DocH2>
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
          <DocH2 ref={what_is_token}>What is Token</DocH2>
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
          <DocH2 ref={basic_api_call}>Basic API Call</DocH2>
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
          <DocH2 ref={explore_payload}>Explore Payload</DocH2>
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
      <Article>
        <DocH1>How to create a payload</DocH1>
        <Content>
          <DocH2 ref={static_payload}>Static Payload</DocH2>
          <DocP>
            Static Payload can be created very easily in a few simple steps which are explained below:
          </DocP>
          <Content>
            <ul>
              <li>After registering successfully into the platform, go to the Custom Payload Page, and click on create.</li>
              <li>
                A new page -
                <Highlight>“create Payload”</Highlight>
                {' '}
                will open, with fields to be entered to create the Payload.
              </li>
              <li>
                Enter the value for the following fields:
                <ul>
                  <li>
                    <Highlight>Payload Title</Highlight>
                    {' '}
                    - The name or title of the Payload that will also be the path or the url of the Payload
                  </li>
                  <li>
                    <Highlight>Description</Highlight>
                    : A brief description of what the Payload does or is about
                  </li>
                  <li>
                    <Highlight>Keywords</Highlight>
                    : Keywords are like tags that will be used for search purpose of the payload
                  </li>
                  <li>
                    <Highlight>Payload type</Highlight>
                    : Selection should be
                    {' '}
                    <Highlight>“Static”</Highlight>
                    {' '}
                    as we are creating a static Payload
                  </li>
                  <li>
                    <Highlight>Visibility</Highlight>
                    : There are two type of visibilities that the user can choose from
                    <ul>
                      <li>
                        <Highlight>Public</Highlight>
                        : For the Payloads with Public visibility set, all the users across the platform can search, view and use the Payload based on their needs.
                      </li>
                      <li>
                        <Highlight>Private</Highlight>
                        : Payloads with private visibility will be visible to everyone but will only be accessible through the authentication token by the user who is creating the payload. Although other users can view the payload but will not be able to view the Token and/or JSON.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Highlight>JSON Code</Highlight>
                    : Editor to allow the user to enter the JSON that he wants to pass through the Payload. For a static payload, the user can either pass a single JSON object or an array of JSON objects.
                  </li>
                </ul>
              </li>
            </ul>
          </Content>

          <DocH5>Static Payload JSON Code Example</DocH5>
          <CodeView
            height="auto"
            code={{
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
            }}
          />
          <DocH2 ref={dynamic_payload}>Dynamic Payload</DocH2>
          <DocP>
            Dynamic Payload can be created very easily in a few simple steps which are explained below:
          </DocP>
          <Content>
            <ul>
              <li>After registering successfully into the platform, go to the Custom Payload Page, and click on create.</li>
              <li>
                A new page -
                <Highlight>“create Payload”</Highlight>
                {' '}
                will open, with fields to be entered to create the Payload.
              </li>
              <li>
                Enter the value for the following fields:
                <ul>
                  <li>
                    <Highlight>Payload Title</Highlight>
                    {' '}
                    - The name or title of the Payload that will also be the path or the url of the Payload
                  </li>
                  <li>
                    <Highlight>Description</Highlight>
                    : A brief description of what the Payload does or is about
                  </li>
                  <li>
                    <Highlight>Keywords</Highlight>
                    : Keywords are like tags that will be used for search purpose of the payload
                  </li>
                  <li>
                    Payload type: Selection should be
                    <Highlight>“Dynamic”</Highlight>
                    {' '}
                    as we are creating a Dynamic Payload.
                  </li>
                  <li>
                    <Highlight>Visibility</Highlight>
                    : There are two type of visibilities that the user can choose from
                    <ul>
                      <li>
                        <Highlight>Public</Highlight>
                        : For the Payloads with Public visibility set, all the users across the platform can search, view and use the Payload based on their needs.
                      </li>
                      <li>
                        <Highlight>Private</Highlight>
                        : Payloads with private visibility will be visible to everyone but will only be accessible through the authentication token by the user who is creating the payload. Although other users can view the payload but will not be able to view the Token and/or JSON.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Highlight>JSON Code</Highlight>
                    : Editor to allow the user to enter the JSON that he wants to pass through the Payload. For a static payload, the user can either pass a single JSON object or an array of JSON objects.
                  </li>
                </ul>
              </li>
            </ul>
          </Content>
          <DocH5>Dynamic Payload JSON Code Example</DocH5>
          <CodeView
            height="auto"
            code={[{
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
            }]}
          />
        </Content>
      </Article>
      <Article>
        <DocH1>Static Payload</DocH1>
        <Content>
          <DocH2 ref={what_is_static_payload}>What is static payload</DocH2>
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
          <DocH2 ref={api_call_example_static}>API Call Example</DocH2>
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
      <Article>
        <DocH1>Dynamic Payload</DocH1>
        <Content>
          <DocH2 ref={what_is_dynamic_payload}>What is dynamic payload</DocH2>
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
          <DocH2 ref={api_call_example_dynamic}>API Call Example</DocH2>
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

      <Article>
        <DocH1 ref={did_we_miss_something}>Did we miss something?</DocH1>
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
        <DocH1 ref={partner_with_us}>Partner with us?</DocH1>
        <DocP>
          We are open for partnerships at the moment. Please contact us if you want to expand your business with our help. We will be more than happy to shake hands(or a Namaste, maybe!).
        </DocP>
      </Article>
    </DocsLayout>
  );
}
