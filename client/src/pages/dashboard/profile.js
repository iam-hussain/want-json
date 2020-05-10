import React from 'react';
import Dash from '../../Components/Layout/Dashboard';
import withAuthorization from '../../Components/Authorization';
import { SubHeadingComp } from '../../Components/Basic/Text';

function Profile() {
  return (
    <Dash>
      <SubHeadingComp back="" title="My Profile" />
      <div>I am Dash</div>
      <div>I am Dash</div>
    </Dash>
  );
}

export default withAuthorization(Profile);
