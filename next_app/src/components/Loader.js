import React from 'react';
import { useSelector } from 'react-redux';

export default function Alert() {
  const common = useSelector((state) => state.common);

  return (
    <div className={`loader-wrapp${common.loading ? ' loader-show' : ''}`}>
      <p className="brand">getJSON.io</p>
      <div className="loader">
        <div className="spinner">
          <div className="bubble-1" />
          <div className="bubble-2" />
          <div className="bubble-3" />
          <div className="bubble-4" />
        </div>
      </div>
    </div>
  );
}
