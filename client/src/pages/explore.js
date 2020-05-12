import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock, faLockOpen, faEye,
} from '@fortawesome/free-solid-svg-icons';
import Page from '../Components/Layout/Page';
import { postMethod } from '../utils/Integration';
import {
  List, ListItem, ListContent, FrontIcon, ListTitle, ListAction, Action, URL,
} from '../Components/Basic/List';
import { DimText, NotFound } from '../Components/Basic/Text';
import { SecondaryBtn } from '../Components/Basic/Button/Button';

function Explore({ payloadData, pages }) {
  const [payload, setPayload] = useState(payloadData);
  const [page, setPage] = useState(pages);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (page.total <= 1) {
      setLoader(false);
    }
  }, []);

  const loadData = async () => {
    if (page.current < page.total) {
      const newPayload = await postMethod('explore', { page: page.current + 1 });
      setPayload([...payload, ...newPayload.payload]);
      setPage(newPayload.page);
      if (newPayload.page.current === newPayload.page.total) {
        setLoader(false);
      }
    } else {
      setLoader(false);
    }
  };

  return (
    <Page>
      <List>
        {payload.map((p) => (
          <ListItem key={p.id}>
            <FrontIcon>
              {p.visibility === 'public'
                ? <FontAwesomeIcon icon={faLockOpen} />
                : <FontAwesomeIcon icon={faLock} />}
            </FrontIcon>
            <ListContent>
              <ListTitle>{p.title}</ListTitle>
              <DimText>{p.description}</DimText>
              <URL>
                {process.env.PAYLOAD_URL}
                {p.url}
              </URL>
            </ListContent>
            <ListAction>
              <Link href={`/dashboard/payload/view/${p.id}`}>
                <Action>
                  <FontAwesomeIcon icon={faEye} />
                </Action>
              </Link>
            </ListAction>
          </ListItem>
        ))}
      </List>
      {loader && <SecondaryBtn margin="10px" onClick={() => loadData()}> Load More </SecondaryBtn>}
      {payload.length === 0 && <NotFound />}
    </Page>
  );
}

Explore.getInitialProps = async (ctx) => {
  const payloadData = await postMethod('explore');
  if (!payloadData.success) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return null;
  }
  return { payloadData: payloadData.payload, pages: payloadData.page };
};

export default Explore;
