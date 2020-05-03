import React from 'react';
import PieChart from '../chart/Pie';
import Doughnut from '../chart/Doughnut';

export default function Statistics() {
  return (
    <div id="editStore" className="dash-box-content show">
      <div className="dash-box-title">
        <h2>Dashboard</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <PieChart />
        </div>
        <div className="col-md-6">
          <Doughnut />
        </div>
      </div>
    </div>
  );
}
