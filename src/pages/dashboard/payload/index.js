import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import debounce from 'lodash.debounce';
import Router, { useRouter } from 'next/router';
import { useAlert } from 'react-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock, faLockOpen, faEye, faEdit, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { shouldHaveAuth } from '../../../utils/Authentication';
import Dash from '../../../components/Layout/Dashboard';
import {
  List, ListItem, ListContent, FrontIcon, ListTitle, ListAction, Action, URL,
} from '../../../components/Basic/List';
import { DimText, SubHeadingComp, NotFound } from '../../../components/Basic/Text';
import { SecondaryBtn } from '../../../components/Basic/Button/Button';
import { getMethod, deleteMethod } from '../../../utils/Integration';

function Payload({ myPayload, token, pages }) {
  const alert = useAlert();
  const router = useRouter();
  const [payload, setPayload] = useState(myPayload);
  const [page, setPage] = useState(pages);
  const [loader, setLoader] = useState(true);

  const syncLogout = (event) => {
    if (event.key === 'logout') {
      router.push('/login');
    }
  };

  useEffect(() => {
    if (payload.length === 0 || page.total <= 1) {
      setLoader(false);
    }
    window.addEventListener('storage', syncLogout);
    return () => {
      window.removeEventListener('storage', syncLogout);
    };
  }, []);

  const loadData = async () => {
    if (page.current < page.total) {
      const newPayload = await getMethod(`payload?page=${page.current + 1}`, token);
      setPayload([...payload, ...newPayload.payload]);
      setPage(newPayload.page);
      if (newPayload.page.current === newPayload.page.total) {
        setLoader(false);
      }
    } else {
      setLoader(false);
    }
  };

  // useEffect(() => {
  //   const pageMaker = document.getElementById('pageMaker');
  //   pageMaker.onscroll = debounce(() => {
  //     if (Math.ceil(pageMaker.scrollTop + pageMaker.clientHeight)
  //     >= Math.ceil(pageMaker.scrollHeight)) {
  //       // loadData();
  //     }
  //   }, 100);
  // }, [payload]);

  const nullDelete = {
    click: 0,
    id: '',
    intervel: 0,
  };
  const [deleteData, setDeleteData] = useState(nullDelete);

  const handleDetele = async (id) => {
    clearInterval(deleteData.interval);
    if (deleteData.click === 1 && deleteData.id === id) {
      const responseData = await deleteMethod(`payload/${id}`, token);
      if (responseData.success) {
        alert.success(responseData.message);
        const newPayload = await getMethod(`payload?limit=${page.current * page.limit}`, token);
        setPayload(newPayload.payload || []);
      } else {
        alert.error(responseData.message || '');
      }
      setDeleteData(nullDelete);
    } else {
      alert.info('Click one more time to confirm Delete');
      const intervel = setInterval(() => {
        setDeleteData(nullDelete);
      }, 4000);
      await setDeleteData({ click: 1, id, intervel });
    }
  };

  return (
    <Dash>
      <SubHeadingComp back="" title="My Payloads" />
      {payload.length !== 0 && (
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
              <Link href={`/dashboard/payload/edit/${p.id}`}>
                <Action>
                  <FontAwesomeIcon icon={faEdit} />
                </Action>
              </Link>
              <Action onClick={() => handleDetele(p.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Action>
            </ListAction>
          </ListItem>
        ))}
      </List>
      )}
      {loader && <SecondaryBtn margin="10px" onClick={() => loadData()}> Load More </SecondaryBtn>}
      {payload.length === 0 && <NotFound />}
    </Dash>
  );
}

Payload.getInitialProps = async (ctx) => {
  const token = shouldHaveAuth(ctx);
  const myPayload = await getMethod('payload', token);

  if (!myPayload.success && ctx.res) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return null;
  }
  if (!myPayload.success) {
    Router.push('/');
  }
  return { myPayload: myPayload.payload, pages: myPayload.page, token };
};

export default Payload;
