import React from 'react';
import Dash from '../../../components/Layout/Dashboard';
import Payload from '../../../components/Form/Payload';
import withAuthorization from '../../../components/Authorization';
import { SubHeadingComp } from '../../../components/Basic/Text';

function Create() {
  return (
    <Dash>
      <SubHeadingComp margin="0px" back="" title="Create Payload" />
      <Payload data={{}} />
    </Dash>
  );
}

export default withAuthorization(Create);
