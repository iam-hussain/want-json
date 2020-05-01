import React from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { closeAlert } from '../redux/actions/alertActions';

export default function Alert() {
  const alertData = useSelector(state => state.alert);
  const dispatch = useDispatch();
  
  return (
    <div className={`model-cover model-close${alertData.show ? ' model-show' : ''}`} onClick={e => dispatch(closeAlert(alertData.closeValue))}>
      <div className="model-box">
        <div className=" model-content">
          <div className="model-text">
            <h2>{alertData.title}</h2>
            <p>{alertData.content}</p>
          </div>
          <div className="model-button">
              {alertData.buttons.map((b, i) =>(
                    <button key={i} className="button secondary model-close" onClick={e => dispatch(closeAlert(b.value))}>
                        {b.icon && <i className={b.icon}></i>} {b.title}
                    </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
