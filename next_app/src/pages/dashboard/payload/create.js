import React from 'react';
import DashWrapper from '../../../components/Dashboard/DashWrapper';
import PayloadForm from '../../../components/Form/PayloadForm';

export default function createPayload() {
  return (
    <DashWrapper>
      <div className="dash-box-content">
        <div className="dash-box-title">
          <h2>Create Store</h2>
        </div>
        <PayloadForm />
      </div>
    </DashWrapper>
  );
}
