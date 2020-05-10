import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAlert } from 'react-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock, faLockOpen, faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { shouldHaveAuth } from '../../../utils/Authentication';
import { SubHeadingComp } from '../../../Components/Basic/Text';
import {
  List, ListItem, ListContent, FrontIcon, ListTitle, ListAction, Action,
} from '../../../Components/Basic/List';
import Dash from '../../../Components/Layout/Dashboard';
import { getMethod, deleteMethod } from '../../../utils/Integration';

function Deleted({ myPayload, token }) {
  const alert = useAlert();
  const router = useRouter();

  const syncLogout = (event) => {
    if (event.key === 'logout') {
      router.push('/login');
    }
  };
  useEffect(() => {
    window.addEventListener('storage', syncLogout);
    return () => {
      window.removeEventListener('storage', syncLogout);
    };
  }, []);

  const nullRestore = {
    click: 0,
    id: '',
    intervel: 0,
  };

  const [restoreData, setRestoreData] = useState(nullRestore);
  const [payload, setPayload] = useState(myPayload);

  const handleRestore = async (id) => {
    clearInterval(restoreData.interval);
    if (restoreData.click === 1 && restoreData.id === id) {
      const responseData = await deleteMethod(`payload_restore/${id}`, token);
      if (responseData.success) {
        alert.success(responseData.message);
        const newPayload = await getMethod('payload_deleted', token);
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
      {payload.map((p) => (
        <List key={p.id}>
          <ListItem>
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
        </List>
      ))}
    </Dash>
  );
}

Deleted.getInitialProps = async (ctx) => {
  const token = shouldHaveAuth(ctx);
  const myPayload = await getMethod('payload_deleted', token);
  return { myPayload: myPayload.payload, token };
};

export default Deleted;
