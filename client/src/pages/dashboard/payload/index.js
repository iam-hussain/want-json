import React, { useEffect } from 'react';
import nextCookie from 'next-cookies';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock, faLockOpen, faEye, faEdit, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import Dash from '../../../Components/Layout/Dashboard';
import {
  List, ListItem, ListContent, FrontIcon, ListTitle, ListAction, Action, URL,
} from '../../../Components/Basic/List';
import { DimText } from '../../../Components/Basic/Text';
import { getMethod } from '../../../utils/Integration';

import { openAlert } from '../../../Redux/Actions/commonActions';

function Payload({ myPayload }) {
  const dispatch = useDispatch();
  const alertData = useSelector((state) => state.common.alert);

  useEffect(() => {
    console.log(alertData);
  }, [alertData]);

  const handleDetele = (id, title) => {
    dispatch(openAlert({
      title: 'Delete',
      content: `Are you sure u want to delete "${title}" ?`,
      buttons: [
        {
          title: 'Close',
          value: 'close',
          type: 'primary',
          action: false,
          data: {},
        },
        {
          title: 'Delete',
          value: 'delete',
          type: 'secondary',
          action: false,
          data: {},
        },
      ],
    }));
  };

  return (
    <Dash>
      {myPayload.map((p) => (
        <List key={p.id}>
          <ListItem>
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
              <Action>
                <FontAwesomeIcon icon={faEye} />
              </Action>
              <Action>
                <FontAwesomeIcon icon={faEdit} />
              </Action>
              <Action onClick={() => handleDetele(p.id, p.title)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Action>
            </ListAction>
          </ListItem>
        </List>
      ))}
    </Dash>
  );
}


Payload.getInitialProps = async (ctx) => {
  const { token } = nextCookie(ctx);
  const myPayload = await getMethod('payload', token);
  console.log('==================', myPayload.payload);
  return { myPayload: myPayload.payload };
};

export default Payload;
