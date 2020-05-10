import React from 'react';
import Dash from '../../../Components/Layout/Dashboard';
import Payload from '../../../Components/Form/Payload';
import withAuthorization from '../../../Components/Authorization';
import { SubHeadingComp } from '../../../Components/Basic/Text';

function Create() {
  return (
    <Dash>
      <SubHeadingComp back="" title="Create Payload" />
      <Payload />
    </Dash>
  );
}

export default withAuthorization(Create);
