import React from 'react';
import Dash from '../../../components/Layout/Dashboard';
import withAuthorization from '../../../components/Authorization';
import { SubHeadingComp } from '../../../components/Basic/Text';
import ChangePasswordForm from '../../../components/Form/ChangePassword';

function ChangePassword() {
  return (
    <Dash>
      <SubHeadingComp margin="0px" back="/dashboard/settings" title="Change Password" />
      <ChangePasswordForm />
    </Dash>
  );
}

export default withAuthorization(ChangePassword);
