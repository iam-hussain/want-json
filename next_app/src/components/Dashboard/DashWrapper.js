import React from 'react';

import Page from '../Page';
import DashMenu from './DashMenu';


export default function DashbaordPage({ children }) {
  return (
    <>
      <Page>
        <div className="row dash-content">
          <DashMenu />
        </div>
        <div className="row dash-content">
          <div className="col-md-8 dash-box">
            {children}
          </div>
        </div>
      </Page>
    </>
  );
}
