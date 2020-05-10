import React from 'react';
import Link from 'next/link';
// import {
//   Item, Label, Input, ErrorBlock, Form, RadioGroup,
//   GroupName, TagGroup, TagItem, InputGroup, InputButton,
// } from '../../../Components/Basic/Form';
import Dash from '../../../Components/Layout/Dashboard';
import withAuthorization from '../../../Components/Authorization';
import { MenuWrapper, MenuBox } from '../../../Components/Navigation/Setting';
import { SubHeadingComp } from '../../../Components/Basic/Text';

function Settings() {
  return (
    <Dash>
      <SubHeadingComp back="/dashboard/settings" title="Change Password" />
      <MenuWrapper>
        <Link href="/">
          <MenuBox>
            Deleted List
          </MenuBox>
        </Link>
        <Link href="/">
          <MenuBox>
            Change Password
          </MenuBox>
        </Link>
      </MenuWrapper>
    </Dash>
  );
}

export default withAuthorization(Settings);
