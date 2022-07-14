import React from 'react';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';
import { getDataSelector } from '../../store/selectors';
import { headers } from '../SubHeader/SubHeader';
import './SelectedComponent.scss';

export const SelectedComponent: React.FC = () => {
    const data = useSelector(getDataSelector);
    const csvReport = {
        "fileName": 'Report.csv',
        headers,
        data,
      }
  return (
    <div className="selected">
      <div className="selected__container">
        <p className="selected__student">1 Student selected</p>
    <div className='selected__buttons'>
    <button 
          type="button"
          className='selected__button'
        >
            X cancel selection
        </button>
        <button type="button" className="selected__button">
          <img
            className="selected__search"
            src='https://file.rendit.io/n/hjSoRJ9Z8QymBCUb7Vz2.svg'
            alt=""
          />
          <CSVLink {...csvReport} className="selected__button">
            Export CSV
          </CSVLink>
        </button>
        <button 
          type="button"
          className='selected__button selected__button--archive'
        >
            <img src="https://file.rendit.io/n/JXv1bYFs0wJ6laPou8rl.svg" alt="" />
            archive selected
        </button>
    </div>
      </div>
    </div>
  );
}
