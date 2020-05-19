import React from 'react';
import Link from 'next/link';
import Dash from '../../../components/Layout/Dashboard';
import withAuthorization from '../../../components/Authorization';
import { MenuWrapper, MenuBox } from '../../../components/Navigation/Setting';
import { SubHeadingComp } from '../../../components/Basic/Text';

function Settings() {
  return (
    <Dash>
      <SubHeadingComp back="" title="Settings" />
      <MenuWrapper>
        <Link href="/dashboard/settings/deleted">
          <MenuBox>
            Deleted List
          </MenuBox>
        </Link>
        <Link href="/dashboard/settings/change_password">
          <MenuBox>
            Change Password
          </MenuBox>
        </Link>
      </MenuWrapper>
    </Dash>
  );
}

export default withAuthorization(Settings);
