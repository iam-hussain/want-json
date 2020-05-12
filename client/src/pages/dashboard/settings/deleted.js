import React, { useState, useEffect } from 'react';
// import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';
import { useAlert } from 'react-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock, faLockOpen, faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { shouldHaveAuth } from '../../../utils/Authentication';
import { SubHeadingComp, NotFound } from '../../../Components/Basic/Text';
import { SecondaryBtn } from '../../../Components/Basic/Button/Button';
import {
  List, ListItem, ListContent, FrontIcon, ListTitle, ListAction, Action,
} from '../../../Components/Basic/List';
import Dash from '../../../Components/Layout/Dashboard';
import { getMethod, deleteMethod } from '../../../utils/Integration';

function Deleted({ myPayload, token, pages }) {
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
    if (pages.total <= 1) {
      setLoader(false);
    }
    window.addEventListener('storage', syncLogout);
    return () => {
      window.removeEventListener('storage', syncLogout);
    };
  }, []);

  const loadData = async () => {
    if (page.current < page.total) {
      const newPayload = await getMethod(`payload_deleted?page=${page.current + 1}`, token);
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
  //       loadData();
  //     }
  //   }, 100);
  // }, [page.current, payload]);

  const nullRestore = {
    click: 0,
    id: '',
    intervel: 0,
  };

  const [restoreData, setRestoreData] = useState(nullRestore);

  const handleRestore = async (id) => {
    clearInterval(restoreData.interval);
    if (restoreData.click === 1 && restoreData.id === id) {
      const responseData = await deleteMethod(`payload_restore/${id}`, token);
      if (responseData.success) {
        alert.success(responseData.message);
        const newPayload = await getMethod(`payload_deleted?limit=${page.current * page.limit}`, token);
        setPayload(newPayload.payload || []);
      } else {
        alert.error(responseData.message || '');
      }
      setRestoreData(nullRestore);
    } else {
      alert.info('Click one more time to confirm Restore');
      const intervel = setInterval(() => {
        setRestoreData(nullRestore);
      }, 4000);
      await setRestoreData({ click: 1, id, intervel });
    }
  };

  return (
    <Dash>
      <SubHeadingComp back="/dashboard/settings" title="Deleted Payloads" />
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
            </ListContent>
            <ListAction>
              <Action onClick={() => handleRestore(p.id)}>
                <FontAwesomeIcon icon={faUndo} />
              </Action>
            </ListAction>
          </ListItem>
        ))}
      </List>
      {loader && <SecondaryBtn margin="10px" onClick={() => loadData()}> Load More </SecondaryBtn>}
      {payload.length === 0 && <NotFound />}
    </Dash>
  );
}

Deleted.getInitialProps = async (ctx) => {
  const token = shouldHaveAuth(ctx);
  const myPayload = await getMethod('payload_deleted', token);
  if (!myPayload.success) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return null;
  }
  return { myPayload: myPayload.payload, pages: myPayload.page, token };
};

export default Deleted;
