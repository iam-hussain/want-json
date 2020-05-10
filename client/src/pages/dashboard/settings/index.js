import React from 'react';
import Link from 'next/link';
import Dash from '../../../Components/Layout/Dashboard';
import withAuthorization from '../../../Components/Authorization';
import { MenuWrapper, MenuBox } from '../../../Components/Navigation/Setting';
import { SubHeadingComp } from '../../../Components/Basic/Text';

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
