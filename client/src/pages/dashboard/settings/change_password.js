import React from 'react';
import Dash from '../../../Components/Layout/Dashboard';
import withAuthorization from '../../../Components/Authorization';
import { SubHeadingComp } from '../../../Components/Basic/Text';
import ChangePasswordForm from '../../../Components/Form/ChangePassword';

function ChangePassword() {
  return (
    <Dash>
      <SubHeadingComp margin="0px" back="/dashboard/settings" title="Change Password" />
      <ChangePasswordForm />
    </Dash>
  );
}

export default withAuthorization(ChangePassword);
